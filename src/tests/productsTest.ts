import { Product, ProductCategory, Products } from "../models/products";

const product = new Products();

describe("Product Model ", () => {
    it("should have an index method", () => {
        expect(product.index).toBeDefined();
    });

    it("should have a show method", () => {
        expect(product.show).toBeDefined();
    });

    it("show have a showByCategory method", () => {
        expect(product.showByCategory).toBeDefined();
    });

    it("show have a create method", () => {
        expect(product.create).toBeDefined();
    });

    it("index method should return a product", async () => {
        const result = await product.index();
        const expectData: Product[] = [
            {
                name: "VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model",
                price: 168,
                id: 1,
            },
            {
                name: "TCL 40-Inch Class S3 1080p LED Smart TV with Roku TV (40S350R, 2023 Model), Compatible with Alexa, Google Assistant, and Apple HomeKit Compatibility, Streaming FHD Television",
                price: 220,
                id: 2,
            },
            {
                name: "VIZIO 24-inch D-Series FHD LED Smart TV w/Bluetooth Headphone Capable, AMD FreeSync & Alexa Compatibility, D24fM-K01, 2023 Model",
                price: 149,
                id: 3,
            },
            {
                name: "Total by Verizon TCL 30 Z, 32GB, Black - Prepaid Smartphone (Locked)",
                price: 29.8,
                id: 4,
            },
            {
                name: "Moto G 5G | 2022 | 2-Day Battery | Unlocked | Made for US by Motorola | 6/256GB | 50 MP Camera | Moonlight Gray",
                price: 189.99,
                id: 5,
            },
        ];

        expect(result).toEqual(expectData);
    });

    it("index method should return a product", async () => {
        const result = await product.show("1");
        const expectData: Product = {
            name: "VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model",
            price: 168,
            id: 1,
        };

        expect(result).toEqual(expectData);
    });

    it("index method should return products list by category", async () => {
        const result = await product.showByCategory("Television");
        const expectData: ProductCategory[] = [
            {
                id: 1,
                name: "VIZIO 40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in, Alexa Compatibility, D40f-J09, 2022 Model",
                price: 168,
                category: "Television",
            },
            {
                id: 2,
                name: "TCL 40-Inch Class S3 1080p LED Smart TV with Roku TV (40S350R, 2023 Model), Compatible with Alexa, Google Assistant, and Apple HomeKit Compatibility, Streaming FHD Television",
                price: 220,
                category: "Television",
            },
            {
                id: 3,
                name: "VIZIO 24-inch D-Series FHD LED Smart TV w/Bluetooth Headphone Capable, AMD FreeSync & Alexa Compatibility, D24fM-K01, 2023 Model",
                price: 149,
                category: "Television",
            },
        ];

        expect(result).toEqual(expectData);
    });

    it("index method should create new product", async () => {
        const result = await product.create({
            name: "product 3",
            price: 220.5,
        });
        const expectData: Product = { name: "product 3", price: 220.5, id: 6 };

        expect(result).toEqual(expectData);
    });
});
