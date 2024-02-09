import { MMKV } from "react-native-mmkv";
import { IStorageServices } from "@/types/storage";

export const storage = new MMKV()

export const MMKVServices: IStorageServices = {
    GetItem: async key => {
        const item = storage.getString(key)
        if(item) {
            return JSON.parse(item)
        }
        return null
    },
    SetItem: async (key, value) => {
        storage.set(key, JSON.stringify(value))
    },
    RemoveItem: async key => {
        storage.delete(key)
    }
} as const