import 'module-alias/register';
import { SetupServer } from './main/server';
import config from 'config';

(async (): Promise<void> => {
  try {
    const server = new SetupServer(config.get('App.port'));
    await server.init();
    server.start();
  } catch (error) {
    console.log(error);
  }
})();
