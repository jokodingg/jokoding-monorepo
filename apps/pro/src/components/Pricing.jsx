import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { waLink } from '@jokoding/config';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('landing-page');

  // Data untuk setiap tab
  const pricingData = {
    'landing-page': {
      title: 'Landing Page',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 700.000',
          features: [
            'Free Domain (.com/.id)',
            'Free Hosting (Selamanya)',
            'Desain Responsif (Mobile & Desktop)',
            '1 Halaman Landing Page (scroll panjang)',
            'SEO On-Page Basic',
            '1x Revisi Gratis',
            'Garansi Maintenance 15 Hari',
            'Video Panduan Akses Website'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 1.200.000',
          originalPrice: 'Rp 1.500.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'Desain Visual Lebih Kompleks (CTA, Form, Galeri)',
            'Direct WhatsApp Chat',
            'Website Dinamis (Bisa diubah kontennya sendiri)',
            '3x Revisi Gratis',
            'Garansi Maintenance 1 Bulan',
            'Video Panduan Akses & Update Website Sendiri'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 2.000.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'Request Fitur Khusus (Popup, Accordion, Pricing Table, dll)',
            'Chatbot AI Sederhana (FAQ Otomatis)',
            'Desain Interaktif (Animated Scroll, Parallax, dll)',
            'Speed Optimization',
            '5x Revisi Gratis',
            'Garansi Maintenance 1,5 Bulan'
          ],
          popular: false
        }
      ]
    },
    'company-profile': {
      title: 'Web Company Profile UMKM',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 1.800.000',
          features: [
            'Free Domain (.com/.id)',
            'Free Hosting Selamanya',
            'Desain Responsif (Mobile & Desktop)',
            'Hingga 5 Halaman (Home, About, Services, Portfolio, Contact)',
            '2 Email Bisnis',
            'Free SSL',
            'Form Kontak',
            '2x Revisi Gratis',
            'Garansi Maintenance 1 Bulan'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 2.300.000',
          originalPrice: 'Rp 3.500.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'Hingga 8 Halaman',
            'Galeri / Portfolio Interaktif',
            'Multi-language Support',
            'Blog Section (5 artikel)',
            '5 Email Bisnis',
            'WhatsApp Integration',
            'Google Maps Integration',
            'SEO On-Page',
            '3x Revisi Gratis',
            'Garansi Maintenance 2 Bulan'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 4.500.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'Unlimited Halaman',
            'CMS untuk Update Konten Sendiri',
            'Advanced Animation & Interaction',
            '10 Email Bisnis',
            'Speed Optimization Premium',
            'Backup Otomatis',
            '5x Revisi Gratis',
            'Garansi Maintenance 3 Bulan'
          ],
          popular: false
        }
      ]
    },
    'e-commerce': {
      title: 'Web Toko Online',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 2.700.000',
          features: [
            'Free Domain (.com)',
            'Shared Hosting (6 Bulan)',
            'Desain Responsif',
            'Hingga 50 Produk',
            'Keranjang Belanja',
            'Checkout System',
            'Payment Gateway (1 metode)',
            'Manajemen Produk',
            'Order Management Basic',
            '2x Revisi Gratis',
            'Garansi Maintenance 1 Bulan'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 3.500.000',
          originalPrice: 'Rp 4.000.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'Hosting 1 Tahun',
            'Unlimited Produk',
            'Multi Payment Gateway',
            'Ongkir Otomatis (RajaOngkir)',
            'Sistem Kupon & Diskon',
            'Product Variants (Size, Color)',
            'Customer Review & Rating',
            'Email Notification',
            'Admin Dashboard',
            '4x Revisi Gratis',
            'Garansi Maintenance 2 Bulan',
            'Training Admin'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 5.000.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'VPS Hosting (1 Tahun)',
            'Multi-vendor Marketplace',
            'Member & Loyalty Point',
            'Wishlist & Compare',
            'Live Chat Support',
            'WhatsApp Order Integration',
            'Advanced Analytics',
            'SEO Optimization',
            'Mobile App (PWA)',
            'Unlimited Revisi (dalam periode development)',
            'Garansi Maintenance 4 Bulan',
            'Priority Support 24/7'
          ],
          popular: false
        }
      ]
    },
    'pos-kasir': {
      title: 'Web Kasir / POS',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 2.700.000',
          features: [
            'Custom Domain',
            'VPS Hosting (3 Bulan)',
            'Desain Responsif (Desktop & Tablet)',
            'Transaksi Penjualan (Kasir)',
            'Manajemen Produk & Stok',
            'Laporan Penjualan Harian/Bulanan',
            'Multi User (2 Kasir)',
            'Cetak Struk Thermal',
            'Database MySQL',
            '2x Revisi Gratis',
            'Garansi Maintenance 1 Bulan',
            'Training Penggunaan System'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 3.500.000',
          originalPrice: 'Rp 4.500.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'VPS Hosting (6 Bulan)',
            'Multi User (5 Kasir)',
            'Manajemen Supplier',
            'Purchase Order & Pembelian',
            'Barcode Scanner Integration',
            'Diskon & Promo',
            'Member & Loyalty Point',
            'Laporan Laba Rugi',
            'Stok Opname',
            'Multi Payment Method',
            'Export Data (Excel/PDF)',
            '4x Revisi Gratis',
            'Garansi Maintenance 2 Bulan',
            'Priority Support'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 5.000.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'VPS Hosting (1 Tahun)',
            'Multi Outlet/Cabang',
            'Sinkronisasi Data Real-time',
            'Unlimited User',
            'Manajemen Hutang Piutang',
            'Shift & Kas Management',
            'Integrasi E-Commerce',
            'WhatsApp Notification',
            'Advanced Analytics & Dashboard',
            'Mobile App (Android)',
            'Backup Otomatis',
            'API Integration',
            'Unlimited Revisi (dalam periode development)',
            'Garansi Maintenance 6 Bulan',
            'Priority Support 24/7'
          ],
          popular: false
        }
      ]
    },
    'bot-whatsapp': {
      title: 'Chatbot WhatsApp AI',
      plans: [
        {
          name: 'Starter',
          price: 'Rp 1.500.000',
          features: [
            'Integrasi WhatsApp Business API',
            'AI Response (GPT-based)',
            'Auto Reply 24/7',
            'FAQ Otomatis (hingga 20 Q&A)',
            'Welcome Message',
            'Keyword Detection',
            'Admin Dashboard (Web)',
            'Laporan Chat Harian',
            'Multi Admin (2 Akun)',
            'Broadcast Message (hingga 100 kontak/hari)',
            '2x Revisi Gratis',
            'Garansi Maintenance 1 Bulan',
            'Training Penggunaan Dashboard'
          ],
          popular: false
        },
        {
          name: 'Growth',
          price: 'Rp 2.300.000',
          originalPrice: 'Rp 3.000.000',
          features: [
            'Semua yang ada di Starter, plus:',
            'Custom AI Training (sesuai bisnis Anda)',
            'FAQ Unlimited',
            'Customer Database & CRM',
            'Lead Tracking & Scoring',
            'Auto Follow-up System',
            'Chatbot Flow Builder (Drag & Drop)',
            'Multi Admin (5 Akun)',
            'Broadcast Unlimited',
            'Broadcast Scheduling',
            'Chat Analytics & Report',
            'Export Data (Excel/CSV)',
            'WhatsApp Button & Quick Reply',
            '4x Revisi Gratis',
            'Garansi Maintenance 2 Bulan',
            'Priority Support'
          ],
          popular: true
        },
        {
          name: 'Ultimate',
          price: 'Rp 4.500.000',
          features: [
            'Semua yang ada di Growth, plus:',
            'Multi WhatsApp Number (3 Nomor)',
            'AI Voice Message (Text-to-Speech)',
            'Sentiment Analysis (AI untuk deteksi mood customer)',
            'Auto Assignment (Chat otomatis ke admin tertentu)',
            'Integration E-Commerce (Katalog Produk)',
            'Payment Gateway Integration',
            'Order Tracking via WhatsApp',
            'Multi-language Support',
            'Chatbot API Access',
            'Webhook Integration',
            'Advanced Analytics Dashboard',
            'Unlimited Admin',
            'White Label (Custom Branding)',
            'Unlimited Revisi (dalam periode development)',
            'Garansi Maintenance 6 Bulan',
            'Priority Support 24/7'
          ],
          popular: false
        }
      ]
    }
  };

  const tabs = [
    { id: 'landing-page', label: 'Landing Page' },
    { id: 'company-profile', label: 'Web Company Profile UMKM' },
    { id: 'e-commerce', label: 'Web Toko Online' },
    { id: 'pos-kasir', label: 'Web Kasir / POS' },
    { id: 'bot-whatsapp', label: 'Chatbot WhatsApp AI'}
  ];

  const currentData = pricingData[activeTab];

  return (
    <section id="pricing" className="relative bg-[#f7f7f2] py-24 overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,224,130,0.25),_transparent_55%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Pricelist <span className="text-amber-600">Layanan</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Solusi lengkap untuk bantu bisnis anda eksis di dunia digital!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                  : 'bg-white text-amber-700 hover:bg-amber-50 border border-amber-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-start">
          {currentData.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl flex flex-col ${
                plan.popular
                  ? 'border-amber-500 shadow-lg shadow-amber-500/10'
                  : 'border-amber-200 hover:border-amber-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg shadow-amber-500/40">
                  <Star className="w-4 h-4 fill-amber-100" />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>

              {/* Price */}
              <div className="mb-6">
                {plan.originalPrice && (
                  <div className="mb-2">
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                )}
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  window.open(waLink(`Halo Jokoding, saya tertarik dengan paket ${plan.name} - ${currentData.title}`), "_blank");
                }}
                className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30 hover:from-amber-600 hover:to-amber-700'
                    : 'bg-amber-500/90 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/20'
                }`}
              >
                Order Sekarang
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Butuh paket custom? <a href="#contact" className="text-amber-600 font-semibold hover:text-amber-700 hover:underline">Hubungi kami</a> untuk penawaran khusus.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
