import { OrderDetailInterface, Orders } from "../models/orders";

const orders = new Orders();

describe("Order Model Unit Test", () => {
    it("There is an indexing method", () => {
        expect(orders.index).toBeDefined();
    });

    it("There is an indexing method return order", async () => {
        const result = await orders.index(2);
        const expectData: OrderDetailInterface[] = [
            {
                user_name: "user",
                id: 1,
                order_status: "complete",
                name: "VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model",
                price: 168,
            },
            {
                user_name: "user",
                id: 1,
                order_status: "complete",
                name: "TCL 40-Inch Class S3 1080p LED Smart TV with Roku TV (40S350R, 2023 Model), Compatible with Alexa, Google Assistant, and Apple HomeKit Compatibility, Streaming FHD Television",
                price: 220,
            },
            {
                user_name: "user",
                id: 1,
                order_status: "complete",
                name: "VIZIO 24-inch D-Series FHD LED Smart TV w/Bluetooth Headphone Capable, AMD FreeSync & Alexa Compatibility, D24fM-K01, 2023 Model",
                price: 149,
            },
            {
                user_name: "user",
                id: 2,
                order_status: "active",
                name: "Total by Verizon TCL 30 Z, 32GB, Black - Prepaid Smartphone (Locked)",
                price: 29.8,
            },
            {
                user_name: "user",
                id: 2,
                order_status: "active",
                name: "Total by Verizon TCL 30 Z, 32GB, Black - Prepaid Smartphone (Locked)",
                price: 29.8,
            },
            {
                user_name: "user",
                id: 2,
                order_status: "active",
                name: "Moto G 5G | 2022 | 2-Day Battery | Unlocked | Made for US by Motorola | 6/256GB | 50 MP Camera | Moonlight Gray",
                price: 189.99,
            },
        ];

        expect(result).toEqual(expectData);
    });
});
