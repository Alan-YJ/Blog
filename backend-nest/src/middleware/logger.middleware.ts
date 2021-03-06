import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response} from 'express'
import { Logger } from '../utils/log4js'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: () => void) {
		const code = res.statusCode
		next();

		//组装日志
		const logFormat = `Method: ${req.method} \n Request origin url: ${req.originalUrl} \n IP: ${req.ip} \n Status code: ${code} \n Body: ${JSON.stringify(req.body) } \n Query: ${JSON.stringify(req.query)} \n`;

		if(code >= 500){
			Logger.error(logFormat)
		}else if(code>=400){
			Logger.warn(logFormat)
		}else{
			Logger.access(logFormat)
			Logger.log(logFormat)
		}
	}
}

export default new LoggerMiddleware()