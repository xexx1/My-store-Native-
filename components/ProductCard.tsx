import { Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
    discount?: number;
    rating?: number;
    isNew?: boolean;
}

const ProductCard = ({ name, price, image, discount = 20, rating = 4.5, isNew = false }: ProductCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const originalPrice = Math.round(price * (1 + discount / 100));

    return (
        <View className="bg-white rounded-3xl overflow-hidden shadow-lg border border-dark-100">
            {/* รูปภาพสินค้า */}
            <View className="relative">
                {/* Gradient Overlay */}
                <View className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />

                <Image
                    source={{ uri: image }}
                    className="w-full h-40"
                    resizeMode="cover"
                />

                {/* Badges Container */}
                <View className="absolute top-2.5 left-2.5 z-20 gap-1.5">
                    {/* Badge ลดราคา */}
                    <View className="bg-accent-500 px-2.5 py-1 rounded-full shadow-sm">
                        <Text className="text-white text-xs font-bold">-{discount}%</Text>
                    </View>

                    {/* Badge ใหม่ */}
                    {isNew && (
                        <View className="bg-primary-500 px-2.5 py-1 rounded-full shadow-sm">
                            <Text className="text-white text-xs font-bold">ใหม่</Text>
                        </View>
                    )}
                </View>

                {/* ปุ่มหัวใจ */}
                <TouchableOpacity
                    className={`absolute top-2.5 right-2.5 z-20 p-2.5 rounded-full shadow-md ${isFavorite ? 'bg-accent-500' : 'bg-white/95'
                        }`}
                    onPress={() => setIsFavorite(!isFavorite)}
                    activeOpacity={0.7}
                >
                    <Text className={`text-lg ${isFavorite ? 'text-white' : 'text-accent-500'}`}>
                        {isFavorite ? '❤️' : '🤍'}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* ข้อมูลสินค้า */}
            <View className="p-4 gap-2.5">
                {/* Rating */}
                <View className="flex-row items-center gap-1">
                    <Text className="text-amber-400 text-sm">★</Text>
                    <Text className="text-dark-600 text-xs font-semibold">{rating}</Text>
                    <Text className="text-dark-400 text-xs">(128)</Text>
                </View>

                {/* ชื่อสินค้า */}
                <Text className="text-sm font-bold text-dark-800 leading-5" numberOfLines={2}>
                    {name}
                </Text>

                {/* ราคา */}
                <View className="flex-row items-baseline gap-2 mt-1">
                    <Text className="text-lg font-extrabold text-primary-600">
                        ฿{price?.toLocaleString()}
                    </Text>
                    <Text className="text-xs text-dark-400 line-through">
                        ฿{originalPrice?.toLocaleString()}
                    </Text>
                </View>

                {/* ปุ่มใส่ตะกร้า */}
                <TouchableOpacity
                    onPress={() => alert("🛒 เพิ่มสินค้าลงตะกร้าแล้ว!")}
                    className="bg-primary-600 mt-2 py-3 rounded-2xl items-center flex-row justify-center gap-2 shadow-md"
                    activeOpacity={0.85}
                    style={{
                        shadowColor: '#4f46e5',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 8,
                        elevation: 6,
                    }}
                >
                    <Text className="text-base">🛒</Text>
                    <Text className="text-white font-bold text-sm">เพิ่มลงตะกร้า</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductCard
