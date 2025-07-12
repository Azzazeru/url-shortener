import type { Url } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import dns from 'dns/promises';

export const prisma = new PrismaClient();

//* Services to Controllers

export const createShortURLService = async (url: string): Promise<Url> => {
  await existingUrlRecord(url);

  const parsedUrl: URL = new URL(url);
  if (!parsedUrl) throw new Error('Invalid URL Format');

  const ip = await dns.resolve(parsedUrl.hostname);
  if (!ip) throw new Error('Invalid Hostname');

  let shortCode: string = generateRandomString();

  const existingShortCode = await prisma.url.findFirst({ where: { shortCode } });
  if (existingShortCode) shortCode = generateRandomString();

  const newRecord = await prisma.url.create({
    data: {
      originalUrl: url,
      shortCode,
    },
  });

  return newRecord;
};

export const retrieveOriginalURLService = async (shortCode: string): Promise<string> => {
  const urlRecord: Url = await getUrlRecord(shortCode);
  await prisma.url.update({
    where: { id: urlRecord.id },
    data: { accessCount: { increment: 1 } },
  });

  return urlRecord.originalUrl;
};

export const updateShortURLService = async (shortCode: string, newUrl: string): Promise<Url> => {
  await existingUrlRecord(newUrl);
  const urlRecord: Url = await getUrlRecord(shortCode);

  return await prisma.url.update({
    where: { id: urlRecord.id },
    data: { originalUrl: newUrl },
  });
};

export const deleteShortURLService = async (shortCode: string): Promise<void> => {
  const urlRecord: Url = await getUrlRecord(shortCode);
  await prisma.url.delete({ where: { id: urlRecord.id } });

  return;
};

export const getURLStatisticsService = async (shortCode: string): Promise<Url> => {
  return await getUrlRecord(shortCode);
};

//? Some Functions to Services

const existingUrlRecord = async (url: string): Promise<Url | null> => {
  const existingUrl = await prisma.url.findFirst({ where: { originalUrl: url } });
  if (existingUrl) throw new Error('URL Already Exists');

  return existingUrl;
};

const generateRandomString = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const getUrlRecord = async (shortCode: string): Promise<Url> => {
  const urlRecord = await prisma.url.findFirst({ where: { shortCode } });
  if (!urlRecord) throw new Error('Short URL Not Found');

  return urlRecord;
};
