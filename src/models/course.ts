import { Request } from "express";

export interface CourseRequest extends Request {
    name?: string
    streetAddress?: string
    city?: string
    state?: string
    zip?: number    
}   
