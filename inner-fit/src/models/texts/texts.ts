export interface IText {
    name: string,
    pages: {
        HIW: string,
        Team: string,
        Memberships: string,
        Contact: string,
        SignIn: string
    },
    home: {
        title: string,
        subtitle: string,
        info: string
    },
    tryFree: string,
    benefits: {
        benefitsTitle: string,
        list: Array<string>,
        message: string
    }
}