import { NextFunction, Request, Response } from "express";

class HealthCheckController {
    async check(request: Request, response: Response, next: NextFunction){
        return response.status(200).json({status: "It's OK HealtCheck!"});
    }
}

export {HealthCheckController};