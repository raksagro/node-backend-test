import 'module-alias/register';
import { SetupServer } from './main/server';

(async (): Promise<void> => {
  try {
    const server = new SetupServer(8000);
    await server.init();
    server.start();
  } catch (error) {
    console.log(error);
  }
})();
