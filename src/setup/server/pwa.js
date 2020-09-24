import fs from 'fs'
import path from 'path'

import view from './view'
import { APP_URL, NODE_ENV } from '../config/env'

fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'public', 'index.html'), view(APP_URL, NODE_ENV))