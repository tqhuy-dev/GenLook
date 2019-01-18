export interface Activities {
    _id: String;
    name: String;
    mainPrice: String;
    salePrice: String;
    status: String;
    rateStart: Number;
    city: String;
    time: {
        open: String;
        close: String
    };
    booking: String;
    description: String;
    image: String;
}
