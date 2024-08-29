import { api } from '../../electron/preload'


declare global {
    interface Window {
      electron: {
        queryDatabase: (query: string) => Promise<any>;
      }
    }
  }