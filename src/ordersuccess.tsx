import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

type OrderData = {
  nama: string;
  alamat: string;
  telepon: string;
  produk: string;
  productId: number;
  jumlah: number;
  totalHarga: number;
  metodePembayaran: string;
  timestamp: string;
};

function OrderSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId } = useParams<{ orderId: string }>();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    if (location.state && 'orderData' in location.state) {
      setOrderData(location.state.orderData as OrderData);
    }
  }, [location.state]);

  const handleWhatsAppClick = () => {
    if (!orderData) return;

    const message = `Halo Kak, saya ${orderData.nama} mau konfirmasi pesanan.

Detail Pesanan:
- Produk: ${orderData.produk}
- Jumlah: ${orderData.jumlah} pcs
- Total Harga: Rp ${orderData.totalHarga.toLocaleString('id-ID')}
- Metode Pembayaran: ${orderData.metodePembayaran}

Data Pengiriman:
- Nama: ${orderData.nama}
- Alamat: ${orderData.alamat}
- Telepon: ${orderData.telepon}

Tanggal Pesanan: ${new Date(orderData.timestamp).toLocaleDateString('id-ID')}

Terima kasih Kak.
Tolong segera diproses ya.`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "6288279126971";
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  if (!orderData) {
    return (
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px'
      }}>
        <p style={{ 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#343a40',
          textAlign: 'center'
        }}>
          ❌ Data pesanan tidak ditemukan
        </p>
        <button 
          onClick={() => navigate('/')}
          style={{
            background: 'linear-gradient(135deg, #495057 0%, #6c757d 100%)',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '12px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 4px 16px rgba(73, 80, 87, 0.2)'
          }}
        >
          🏠 Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
      padding: '20px'
    }}>
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto'
      }}>
        {/* Success Icon */}
        <div style={{
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 8px 24px rgba(40, 167, 69, 0.3)',
            animation: 'scaleIn 0.5s ease'
          }}>
            <span style={{ fontSize: '40px', color: 'white' }}>✓</span>
          </div>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#343a40',
            marginBottom: '10px'
          }}>
            Pesanan Berhasil!
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#6c757d',
            fontWeight: '500'
          }}>
            Terima kasih telah berbelanja di toko kami
          </p>
          {orderId && (
            <p style={{
              fontSize: '13px',
              color: '#6c757d',
              fontWeight: '600',
              marginTop: '10px',
              padding: '8px 16px',
              background: 'rgba(108, 117, 125, 0.1)',
              borderRadius: '8px',
              display: 'inline-block'
            }}>
              Order ID: #{orderId}
            </p>
          )}
        </div>

        {/* Order Details Card */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '25px',
          marginBottom: '20px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#343a40',
            marginBottom: '20px',
            paddingBottom: '15px',
            borderBottom: '2px solid #f8f9fa'
          }}>
            📋 Detail Pesanan
          </h3>

          {/* Product Info */}
          <div style={{
            background: '#f8f9fa',
            borderRadius: '12px',
            padding: '15px',
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#6c757d',
                fontWeight: '500'
              }}>
                Produk
              </span>
              <span style={{
                fontSize: '15px',
                color: '#343a40',
                fontWeight: '600'
              }}>
                {orderData.produk}
              </span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#6c757d',
                fontWeight: '500'
              }}>
                Jumlah
              </span>
              <span style={{
                fontSize: '15px',
                color: '#343a40',
                fontWeight: '600'
              }}>
                {orderData.jumlah} pcs
              </span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '12px',
              borderTop: '1px dashed #dee2e6'
            }}>
              <span style={{
                fontSize: '15px',
                color: '#343a40',
                fontWeight: '600'
              }}>
                Total Harga
              </span>
              <span style={{
                fontSize: '18px',
                color: '#28a745',
                fontWeight: '700'
              }}>
                Rp {orderData.totalHarga.toLocaleString('id-ID')}
              </span>
            </div>
          </div>

          {/* Customer Info */}
          <div style={{ marginBottom: '15px' }}>
            <p style={{
              fontSize: '13px',
              color: '#6c757d',
              fontWeight: '500',
              marginBottom: '5px'
            }}>
              👤 Nama Pemesan
            </p>
            <p style={{
              fontSize: '15px',
              color: '#343a40',
              fontWeight: '600',
              margin: 0
            }}>
              {orderData.nama}
            </p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <p style={{
              fontSize: '13px',
              color: '#6c757d',
              fontWeight: '500',
              marginBottom: '5px'
            }}>
              📍 Alamat Pengiriman
            </p>
            <p style={{
              fontSize: '15px',
              color: '#343a40',
              fontWeight: '600',
              margin: 0,
              lineHeight: '1.5'
            }}>
              {orderData.alamat}
            </p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <p style={{
              fontSize: '13px',
              color: '#6c757d',
              fontWeight: '500',
              marginBottom: '5px'
            }}>
              📞 Nomor WhatsApp
            </p>
            <p style={{
              fontSize: '15px',
              color: '#343a40',
              fontWeight: '600',
              margin: 0
            }}>
              {orderData.telepon}
            </p>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <p style={{
              fontSize: '13px',
              color: '#6c757d',
              fontWeight: '500',
              marginBottom: '5px'
            }}>
              💳 Metode Pembayaran
            </p>
            <p style={{
              fontSize: '15px',
              color: '#343a40',
              fontWeight: '600',
              margin: 0
            }}>
              {orderData.metodePembayaran}
            </p>
          </div>

          <div>
            <p style={{
              fontSize: '13px',
              color: '#6c757d',
              fontWeight: '500',
              marginBottom: '5px'
            }}>
              📅 Tanggal Pesanan
            </p>
            <p style={{
              fontSize: '15px',
              color: '#343a40',
              fontWeight: '600',
              margin: 0
            }}>
              {new Date(orderData.timestamp).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <button 
          onClick={handleWhatsAppClick}
          style={{
            width: '100%',
            padding: '16px',
            fontSize: '16px',
            fontWeight: '700',
            color: 'white',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.3)';
          }}
        >
          <span style={{ fontSize: '20px' }}>💬</span>
          Konfirmasi via WhatsApp
        </button>

        {/* Back to Home Button */}
        <button 
          onClick={() => navigate('/')}
          style={{
            width: '100%',
            padding: '14px',
            fontSize: '15px',
            fontWeight: '600',
            color: '#495057',
            background: 'white',
            border: '2px solid #dee2e6',
            borderRadius: '12px',
            cursor: 'pointer',
            marginBottom: '20px',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#495057';
            e.currentTarget.style.color = '#343a40';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#dee2e6';
            e.currentTarget.style.color = '#495057';
          }}
        >
          🏠 Kembali ke Beranda
        </button>

        {/* Info Box */}
        <div style={{
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <p style={{ 
            color: '#6c757d', 
            fontSize: '13px', 
            lineHeight: '1.6',
            fontWeight: '500',
            margin: 0
          }}>
            💡 Silakan klik tombol WhatsApp untuk konfirmasi pesanan Anda.<br />
            Tim kami akan segera memproses pesanan Anda.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default OrderSuccessPage;