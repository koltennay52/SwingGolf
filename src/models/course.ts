import { course } from "@prisma/client";

export class Course {
    id: string | null
    name: string | null
    streetAddress: string | null
    city: string | null
    state: string | null
    zip: string | null    

    constructor(course: course) {
        this.id = course.id.toString();
        this.name = course.name;
        this.streetAddress = course.streetAddress;
        this.city = course.city;
        this.state = course.state;
        this.zip = course.zip?.toString() ?? null;
    }
}   
