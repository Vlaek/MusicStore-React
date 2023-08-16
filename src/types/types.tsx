export interface IAlbum {
    id: number
    title: string
    author: string
    tracklist: ITrack[]
    img: string
    desc: string
    genre: string
    date: string
    price: number
}

export interface ITrack {
    id: number
    name: string
    duration: string
}

export interface IOrder extends IAlbum {
    count: number
}

export interface IOrderHistory {
    id: number
    order: IOrder[]
    price: number
    date: string
}

export interface IShowModal {
    (item: IAlbum): void
}

export interface IShowModalOrder {
    (): void
}

export interface ILike {
    (item: IAlbum): IAlbum[]
}

export interface IAdd {
    (item: IAlbum): IOrder[]
}

export interface IRemove {
    (item: IOrder): IOrder[]
}

export interface IDelete {
    (id: number): void
}

export interface IMakeOrder {
    (order: IOrder[], price: number): void
}

export interface IClearOrder {
    (): void
}