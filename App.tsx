import { ScrollView, Text, TouchableOpacity, View, StatusBar, TextInput } from 'react-native'
import React, { useState } from 'react'
import products from './data'
import ProductCard from './components/ProductCard'

const App = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [cartCount, setCartCount] = useState(3);

    const categories = [
        { id: 'all', name: 'ทั้งหมด', icon: '📦' },
        { id: 'mouse', name: 'เมาส์', icon: '🖱️' },
        { id: 'keyboard', name: 'คีย์บอร์ด', icon: '⌨️' },
        { id: 'monitor', name: 'จอมอนิเตอร์', icon: '🖥️' },
        { id: 'audio', name: 'หูฟัง', icon: '🎧' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#1e1b4b" />
            <View className="flex-1 bg-dark-50">
                {/* Header Navigation - Premium Dark Theme */}
                <View
                    className="w-full bg-primary-950 pt-12 pb-5 px-5"
                    style={{
                        shadowColor: '#1e1b4b',
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.3,
                        shadowRadius: 16,
                        elevation: 12,
                    }}
                >
                    {/* Top Bar */}
                    <View className="flex-row items-center justify-between mb-5">
                        {/* Logo & Brand */}
                        <View className="flex-row items-center gap-3">
                            <View
                                className="w-11 h-11 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl items-center justify-center"
                                style={{
                                    shadowColor: '#f97316',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.4,
                                    shadowRadius: 8,
                                    elevation: 6,
                                }}
                            >
                                <Text className="text-2xl">🛍️</Text>
                            </View>
                            <View>
                                <Text className="text-white text-xl font-extrabold tracking-wide">
                                    JODS
                                </Text>
                                <Text className="text-primary-300 text-xs font-medium -mt-0.5">
                                    Premium Tech Store
                                </Text>
                            </View>
                        </View>

                        {/* Action Buttons */}
                        <View className="flex-row gap-2">
                            <TouchableOpacity
                                className="bg-primary-900/80 p-2.5 rounded-xl border border-primary-800"
                                activeOpacity={0.7}
                            >
                                <Text className="text-lg">🔔</Text>
                                {/* Notification Badge */}
                                <View className="absolute -top-1 -right-1 bg-accent-500 w-4 h-4 rounded-full items-center justify-center">
                                    <Text className="text-white text-xs font-bold">2</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="bg-primary-900/80 p-2.5 rounded-xl border border-primary-800"
                                activeOpacity={0.7}
                            >
                                <Text className="text-lg">👤</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Search Bar */}
                    <View className="flex-row items-center bg-primary-900/60 rounded-2xl px-4 py-3 border border-primary-800">
                        <Text className="text-primary-400 text-lg mr-3">🔍</Text>
                        <TextInput
                            placeholder="ค้นหาสินค้า..."
                            placeholderTextColor="#a5b4fc"
                            className="flex-1 text-white text-base"
                        />
                        <TouchableOpacity className="bg-primary-700 px-3 py-1.5 rounded-xl">
                            <Text className="text-primary-200 text-sm font-semibold">ค้นหา</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Hero Banner - Premium Gradient */}
                <View
                    className="mx-4 mt-5 rounded-3xl overflow-hidden"
                    style={{
                        shadowColor: '#4f46e5',
                        shadowOffset: { width: 0, height: 8 },
                        shadowOpacity: 0.25,
                        shadowRadius: 20,
                        elevation: 10,
                    }}
                >
                    <View className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 p-6">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-1 pr-4">
                                <View className="bg-accent-500/20 self-start px-3 py-1 rounded-full mb-3">
                                    <Text className="text-accent-300 text-xs font-bold">🔥 Hot Deal</Text>
                                </View>
                                <Text className="text-3xl text-white font-extrabold mb-2">
                                    Flash Sale!
                                </Text>
                                <Text className="text-base text-primary-200 mb-4 leading-5">
                                    ลดสูงสุด 50% อุปกรณ์ไอทีคุณภาพดี ทุกชิ้น!
                                </Text>
                                <TouchableOpacity
                                    className="bg-accent-500 px-6 py-3 rounded-2xl self-start flex-row items-center gap-2"
                                    style={{
                                        shadowColor: '#f97316',
                                        shadowOffset: { width: 0, height: 4 },
                                        shadowOpacity: 0.4,
                                        shadowRadius: 8,
                                        elevation: 6,
                                    }}
                                    activeOpacity={0.85}
                                >
                                    <Text className="text-white font-bold text-base">ช้อปเลย</Text>
                                    <Text className="text-white text-lg">→</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="bg-primary-800/50 w-20 h-20 rounded-3xl items-center justify-center">
                                <Text className="text-5xl">💎</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Categories - Horizontal Scroll */}
                <View className="mt-5">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="px-4"
                        contentContainerStyle={{ gap: 10 }}
                    >
                        {categories.map((cat) => (
                            <TouchableOpacity
                                key={cat.id}
                                onPress={() => setSelectedCategory(cat.id)}
                                className={`flex-row items-center gap-2 px-4 py-2.5 rounded-2xl border ${selectedCategory === cat.id
                                        ? 'bg-primary-600 border-primary-500'
                                        : 'bg-white border-dark-200'
                                    }`}
                                style={selectedCategory === cat.id ? {
                                    shadowColor: '#4f46e5',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 8,
                                    elevation: 6,
                                } : {}}
                                activeOpacity={0.7}
                            >
                                <Text className="text-base">{cat.icon}</Text>
                                <Text className={`font-semibold text-sm ${selectedCategory === cat.id ? 'text-white' : 'text-dark-600'
                                    }`}>
                                    {cat.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Products Section Header */}
                <View className="px-5 mt-6 mb-4">
                    <View className="flex-row items-center justify-between">
                        <View>
                            <Text className="text-xl font-extrabold text-dark-800">
                                สินค้าแนะนำ ✨
                            </Text>
                            <Text className="text-sm text-dark-400 mt-0.5">
                                พบ {products.length} รายการ
                            </Text>
                        </View>
                        <TouchableOpacity
                            className="bg-primary-100 px-4 py-2 rounded-xl border border-primary-200"
                            activeOpacity={0.7}
                        >
                            <Text className="text-primary-700 font-semibold text-sm">ดูทั้งหมด →</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Products Grid */}
                <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
                    <View className="flex-row flex-wrap justify-between pb-24">
                        {products.map((p, index) => (
                            <View key={p.id} className="w-[48%] mb-4">
                                <ProductCard
                                    name={p.name}
                                    price={p.price}
                                    image={p.image}
                                    isNew={index < 3}
                                    rating={4.2 + (index % 8) * 0.1}
                                    discount={10 + (index % 5) * 5}
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* Bottom Navigation - Premium Style */}
                <View
                    className="absolute bottom-0 left-0 right-0 bg-white border-t border-dark-100 px-4 py-2"
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: -4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 12,
                        elevation: 20,
                    }}
                >
                    <View className="flex-row justify-around items-center">
                        {[
                            { id: 'home', icon: '🏠', label: 'หน้าแรก' },
                            { id: 'categories', icon: '📦', label: 'หมวดหมู่' },
                            { id: 'cart', icon: '🛒', label: 'ตะกร้า', badge: cartCount },
                            { id: 'favorites', icon: '❤️', label: 'ชอบ' },
                            { id: 'profile', icon: '👤', label: 'โปรไฟล์' },
                        ].map((tab) => (
                            <TouchableOpacity
                                key={tab.id}
                                onPress={() => setActiveTab(tab.id)}
                                className={`items-center py-2 px-4 rounded-2xl ${activeTab === tab.id ? 'bg-primary-100' : ''
                                    }`}
                                activeOpacity={0.7}
                            >
                                <View className="relative">
                                    <Text className={`text-xl ${activeTab === tab.id ? '' : 'opacity-60'
                                        }`}>
                                        {tab.icon}
                                    </Text>
                                    {tab.badge && (
                                        <View className="absolute -top-1.5 -right-2 bg-accent-500 min-w-[18px] h-[18px] rounded-full items-center justify-center px-1">
                                            <Text className="text-white text-xs font-bold">{tab.badge}</Text>
                                        </View>
                                    )}
                                </View>
                                <Text className={`text-xs mt-1 font-medium ${activeTab === tab.id ? 'text-primary-700' : 'text-dark-400'
                                    }`}>
                                    {tab.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Home Indicator Safe Area */}
                    <View className="h-1" />
                </View>
            </View>
        </>
    )
}

export default App
