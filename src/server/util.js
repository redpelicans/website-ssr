import { join } from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { public as publicConfig } from '../../config';

const md5 = (string) => crypto.createHash('md5').update(string).digest('hex');
const getFile = (path, name, ext='') => fs.readFileSync(join(path, name + ext));
export const getHashedUrl = (name, ext) => `/public/${name}${ext}?${md5(getFile(publicConfig.path, name, ext))}`;


