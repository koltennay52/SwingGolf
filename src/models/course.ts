import { course } from "@prisma/client";

export class Course {
    name: string | null
    streetAddress: string | null
    city: string | null
    state: string | null
    zip: string | null    

    constructor(course: course) {
        this.name = course.name;
        this.streetAddress = course.streetAddress;
        this.city = course.city;
        this.state = course.state;
        this.zip = course.zip?.toString() ?? null;
    }
}   
