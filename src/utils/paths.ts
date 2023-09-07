import moduleAlias from 'module-alias';

import { join, resolve } from 'path';

const path = resolve(__dirname, '../');

moduleAlias.addAliases({
  '@src': join(path),
  '@utils': join(path, 'utils')
});
