import { PORT, NODE_ENV , IPLOCAL} from '../utils/env';

interface Config {
    port: number;
    nodeEnv: string;
    ipLocal: string;
}

const config: Config = {
    port: PORT,
    nodeEnv: NODE_ENV,
    ipLocal: IPLOCAL,
};

export default config;