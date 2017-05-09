import { join } from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { build as buildConfig } from '../../config';

const md5 = (string) => crypto.createHash('md5').update(string).digest('hex');
export const getFile = (path, name, ext='') => fs.readFileSync(join(path, name + ext));
export const getHashedUrl = (name, ext) => `/build/${name}${ext}?${md5(getFile(buildConfig.path, name, ext))}`;


