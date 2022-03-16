
export interface ITicket {
    price: number
    carrier: string
    segments: IFlight[]
}

export interface IFlight {
    origin: string
    destination: string
    date: string
    stops: string[]
    duration: number
}
