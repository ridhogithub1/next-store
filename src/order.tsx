// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate, useParams } from 'react-router-dom';
// // import { staticProducts } from './produk';
// // import { productReviews, Review } from './review';

// // type Product = {
// //   id: number;
// //   name: string;
// //   price: number;
// //   images: string[];
// //   description?: string;
// // };

// // // Star Rating Component
// // function StarRating({ rating }: { rating: number }) {
// //   return (
// //     <div style={{ display: 'flex', gap: '2px' }}>
// //       {[1, 2, 3, 4, 5].map((star) => (
// //         <span
// //           key={star}
// //           style={{
// //             color: star <= rating ? '#ffc107' : '#e0e0e0',
// //             fontSize: '16px'
// //           }}
// //         >
// //           ★
// //         </span>
// //       ))}
// //     </div>
// //   );
// // }

// // // Review Card Component
// // function ReviewCard({ review }: { review: Review }) {
// //   const [showAllImages, setShowAllImages] = useState(false);
// //   const displayImages = showAllImages ? review.images : review.images?.slice(0, 2);

// //   return (
// //     <div style={{
// //       background: 'white',
// //       borderRadius: '12px',
// //       padding: '20px',
// //       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
// //       marginBottom: '15px'
// //     }}>
// //       {/* Header */}
// //       <div style={{
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         marginBottom: '12px'
// //       }}>
// //         <div>
// //           <p style={{
// //             fontSize: '16px',
// //             fontWeight: '600',
// //             color: '#343a40',
// //             margin: '0 0 4px 0'
// //           }}>
// //             {review.user}
// //           </p>
// //           <StarRating rating={review.rating} />
// //         </div>
// //         <span style={{
// //           fontSize: '13px',
// //           color: '#6c757d',
// //           fontWeight: '500'
// //         }}>
// //           {new Date(review.date).toLocaleDateString('id-ID', {
// //             day: 'numeric',
// //             month: 'short',
// //             year: 'numeric'
// //           })}
// //         </span>
// //       </div>

// //       {/* Comment */}
// //       <p style={{
// //         fontSize: '14px',
// //         color: '#495057',
// //         lineHeight: '1.6',
// //         margin: '0 0 12px 0'
// //       }}>
// //         {review.comment}
// //       </p>

// //       {/* Images */}
// //       {review.images && review.images.length > 0 && (
// //         <div>
// //           <div style={{
// //             display: 'flex',
// //             gap: '8px',
// //             flexWrap: 'wrap',
// //             marginBottom: '8px'
// //           }}>
// //             {displayImages?.map((image, idx) => (
// //               <img
// //                 key={idx}
// //                 src={image}
// //                 alt={`Review ${idx + 1}`}
// //                 style={{
// //                   width: '80px',
// //                   height: '80px',
// //                   objectFit: 'cover',
// //                   borderRadius: '8px',
// //                   cursor: 'pointer',
// //                   transition: 'transform 0.2s ease'
// //                 }}
// //                 onMouseOver={(e) => {
// //                   e.currentTarget.style.transform = 'scale(1.05)';
// //                 }}
// //                 onMouseOut={(e) => {
// //                   e.currentTarget.style.transform = 'scale(1)';
// //                 }}
// //               />
// //             ))}
// //           </div>
// //           {review.images.length > 2 && !showAllImages && (
// //             <button
// //               onClick={() => setShowAllImages(true)}
// //               style={{
// //                 background: 'transparent',
// //                 border: 'none',
// //                 color: '#28a745',
// //                 fontSize: '13px',
// //                 fontWeight: '600',
// //                 cursor: 'pointer',
// //                 padding: '4px 0'
// //               }}
// //             >
// //               +{review.images.length - 2} foto lainnya
// //             </button>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // // Image Carousel Component
// // function ImageCarousel({ images, productName }: { images: string[], productName: string }) {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   const nextImage = () => {
// //     setCurrentImageIndex((prev) => (prev + 1) % images.length);
// //   };

// //   const prevImage = () => {
// //     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
// //   };

// //   const goToImage = (index: number) => {
// //     setCurrentImageIndex(index);
// //   };

// //   return (
// //     <div style={{
// //       position: 'relative',
// //       width: '100%',
// //       borderRadius: '16px',
// //       overflow: 'hidden',
// //       background: 'white',
// //       boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
// //     }}>
// //       <div style={{ 
// //         position: 'relative',
// //         width: '100%',
// //         height: '300px',
// //         overflow: 'hidden'
// //       }}>
// //         <img 
// //           src={images[currentImageIndex]} 
// //           alt={`${productName} - Image ${currentImageIndex + 1}`}
// //           style={{
// //             width: '100%',
// //             height: '100%',
// //             objectFit: 'cover',
// //             transition: 'transform 0.3s ease'
// //           }}
// //         />
        
// //         {images.length > 1 && (
// //           <>
// //             <button
// //               onClick={prevImage}
// //               style={{
// //                 position: 'absolute',
// //                 left: '10px',
// //                 top: '50%',
// //                 transform: 'translateY(-50%)',
// //                 background: 'rgba(0, 0, 0, 0.6)',
// //                 border: 'none',
// //                 borderRadius: '50%',
// //                 width: '40px',
// //                 height: '40px',
// //                 color: 'white',
// //                 fontSize: '18px',
// //                 cursor: 'pointer',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 transition: 'all 0.3s ease'
// //               }}
// //             >
// //               ←
// //             </button>
            
// //             <button
// //               onClick={nextImage}
// //               style={{
// //                 position: 'absolute',
// //                 right: '10px',
// //                 top: '50%',
// //                 transform: 'translateY(-50%)',
// //                 background: 'rgba(0, 0, 0, 0.6)',
// //                 border: 'none',
// //                 borderRadius: '50%',
// //                 width: '40px',
// //                 height: '40px',
// //                 color: 'white',
// //                 fontSize: '18px',
// //                 cursor: 'pointer',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 transition: 'all 0.3s ease'
// //               }}
// //             >
// //               →
// //             </button>
// //           </>
// //         )}

// //         <div style={{
// //           position: 'absolute',
// //           top: '10px',
// //           right: '10px',
// //           background: 'rgba(0, 0, 0, 0.7)',
// //           color: 'white',
// //           padding: '4px 8px',
// //           borderRadius: '12px',
// //           fontSize: '12px',
// //           fontWeight: '600'
// //         }}>
// //           {currentImageIndex + 1} / {images.length}
// //         </div>
// //       </div>

// //       {images.length > 1 && (
// //         <div style={{
// //           display: 'flex',
// //           gap: '8px',
// //           padding: '15px',
// //           justifyContent: 'center',
// //           flexWrap: 'wrap'
// //         }}>
// //           {images.map((image, index) => (
// //             <button
// //               key={index}
// //               onClick={() => goToImage(index)}
// //               style={{
// //                 border: 'none',
// //                 borderRadius: '8px',
// //                 padding: '2px',
// //                 background: currentImageIndex === index ? '#f8f9fa' : 'transparent',
// //                 cursor: 'pointer',
// //                 transition: 'all 0.3s ease',
// //                 opacity: currentImageIndex === index ? 1 : 0.7
// //               }}
// //             >
// //               <img
// //                 src={image}
// //                 alt={`Thumbnail ${index + 1}`}
// //                 style={{
// //                   width: '50px',
// //                   height: '50px',
// //                   objectFit: 'cover',
// //                   borderRadius: '6px',
// //                   display: 'block'
// //                 }}
// //               />
// //             </button>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // function OrderPage() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { productId } = useParams<{ productId: string }>();
  
// //   const [product, setProduct] = useState<Product | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [reviews, setReviews] = useState<Review[]>([]);
  
// //   const [nama, setNama] = useState("");
// //   const [alamat, setAlamat] = useState("");
// //   const [telepon, setTelepon] = useState("");
// //   const [jumlah, setJumlah] = useState(1);
// //   const [paymentMethod, setPaymentMethod] = useState("COD");
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   useEffect(() => {
// //     let foundProduct: Product | null = null;

// //     if (location.state && typeof location.state === 'object' && 'id' in location.state) {
// //       foundProduct = location.state as Product;
// //     } else if (productId) {
// //       const id = parseInt(productId);
// //       foundProduct = staticProducts.find(p => p.id === id) || null;
// //     }

// //     setProduct(foundProduct);
    
// //     // Load reviews for this product
// //     if (foundProduct !== null) {
// //       const productReviewsList = productReviews.filter(r => r.productId === foundProduct!.id);
// //       setReviews(productReviewsList);
// //     }
    
// //     setLoading(false);

// //     if (foundProduct !== null && !productId) {
// //       navigate(`/order/${foundProduct.id}`, { replace: true });
// //     }
// //   }, [productId, location.state, navigate]);

// //   const totalHarga = (product?.price ?? 0) * jumlah;

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
    
// //     if (!product) {
// //       alert("❌ Data produk tidak ditemukan!");
// //       return;
// //     }

// //     setIsSubmitting(true);

// //     try {
// //       const totalHarga = product.price * jumlah;

// //       const orderData = {
// //         nama: nama.trim(),
// //         alamat: alamat.trim(),
// //         telepon: telepon.trim(),
// //         produk: product.name,
// //         productId: product.id,
// //         jumlah: jumlah,
// //         totalHarga: totalHarga,
// //         metodePembayaran: paymentMethod,
// //         timestamp: new Date().toISOString()
// //       };

// //       await fetch("https://script.google.com/macros/s/AKfycbyFTX7kiBl_8f6mHDZ_oVByx7fOhch56fUNgoU4JiKnnoyz5RYDX6ZzWgTz02gPl5HJ/exec", {
// //         method: "POST",
// //         mode: "no-cors",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(orderData)
// //       });

// // const message = `Halo Kak, saya ${nama} mau konfirmasi pesanan.

// // Detail Pesanan:
// // - Produk: ${product.name}
// // - Jumlah: ${jumlah} pcs
// // - Total Harga: Rp ${totalHarga.toLocaleString('id-ID')}
// // - Metode Pembayaran: ${paymentMethod}

// // Data Pengiriman:
// // - Nama: ${nama}
// // - Alamat: ${alamat}
// // - Telepon: ${telepon}

// // Tanggal Pesanan: ${new Date().toLocaleDateString('id-ID')}

// // Terima kasih Kak.
// // Tolong segera diproses ya.`;




// //       const encodedMessage = encodeURIComponent(message);
// //       const phoneNumber = "6288279126971";

// //       alert("✅ Pesanan berhasil dikirim! Data telah tersimpan dan Anda akan diarahkan ke WhatsApp.");
// //       // Setelah alert sukses, ganti dengan navigasi ke halaman success
// //       navigate('/ordersuccess', {
// //         state: { orderData }
// //       });
// //       window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

// //       setNama("");
// //       setAlamat("");
// //       setTelepon("");
// //       setJumlah(1);
// //       setPaymentMethod("COD");

// //     } catch (error) {
// //       console.error("Error details:", error);
// //       alert("❌ Terjadi kesalahan saat mengirim data. Silakan coba lagi atau hubungi admin.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div style={{ 
// //         minHeight: '100vh',
// //         background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         color: '#343a40'
// //       }}>
// //         <p style={{ fontSize: '18px', fontWeight: '600' }}>⏳ Memuat produk...</p>
// //       </div>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <div style={{ 
// //         minHeight: '100vh',
// //         background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         color: '#343a40',
// //         flexDirection: 'column',
// //         gap: '20px'
// //       }}>
// //         <p style={{ fontSize: '18px', fontWeight: '600' }}>❌ Produk tidak ditemukan.</p>
// //         <button 
// //           onClick={() => navigate('/')}
// //           style={{
// //             background: 'linear-gradient(135deg, #495057 0%, #6c757d 100%)',
// //             border: 'none',
// //             padding: '12px 24px',
// //             borderRadius: '12px',
// //             color: 'white',
// //             cursor: 'pointer',
// //             fontSize: '16px',
// //             fontWeight: '600',
// //             boxShadow: '0 4px 16px rgba(73, 80, 87, 0.2)'
// //           }}
// //         >
// //           🏠 Kembali ke Beranda
// //         </button>
// //       </div>
// //     );
// //   }

// //   const avgRating = reviews.length > 0 
// //     ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
// //     : '0.0';

// //   return (
// //     <div style={{ 
// //       minHeight: '100vh',
// //       background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
// //       padding: '20px'
// //     }}>
// //       <div style={{ 
// //         maxWidth: '600px', 
// //         margin: '0 auto'
// //       }}>
// //         {/* Back Button */}
// //         <button 
// //           onClick={() => navigate('/')}
// //           style={{
// //             background: 'white',
// //             border: 'none',
// //             padding: '12px 20px',
// //             borderRadius: '12px',
// //             color: '#495057',
// //             cursor: 'pointer',
// //             fontSize: '14px',
// //             fontWeight: '600',
// //             marginBottom: '20px',
// //             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
// //           }}
// //         >
// //           ← Kembali
// //         </button>

// //         <h2 style={{
// //           fontSize: '1.8rem',
// //           fontWeight: '700',
// //           color: '#343a40',
// //           marginBottom: '25px',
// //           textAlign: 'center'
// //         }}>
// //           Detail Pemesanan
// //         </h2>
        
// //         {/* Product Preview */}
// //         <div style={{
// //           background: 'white',
// //           borderRadius: '16px',
// //           padding: '20px',
// //           marginBottom: '25px',
// //           boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
// //         }}>
// //           <ImageCarousel images={product.images} productName={product.name} />
          
// //           <div style={{ textAlign: 'center', marginTop: '20px' }}>
// //             <h3 style={{ 
// //               fontSize: '24px', 
// //               fontWeight: '700',
// //               color: '#343a40',
// //               marginBottom: '8px'
// //             }}>
// //               {product.name}
// //             </h3>

// //             {/* <p style={{
// //               fontSize: '12px',
// //               color: '#6c757d',
// //               marginBottom: '8px',
// //               fontWeight: '500',
// //               opacity: 0.8
// //             }}>
// //               Product ID: {product.id}
// //             </p>
// //              */}
// //             {product.description && (
// //               <p style={{
// //                 fontSize: '14px',
// //                 color: '#6c757d',
// //                 marginBottom: '15px',
// //                 lineHeight: '1.5',
// //                 fontStyle: 'italic'
// //               }}>
// //                 {product.description}
// //               </p>
// //             )}
            
// //             <p style={{ 
// //               fontSize: '20px', 
// //               fontWeight: '700',
// //               color: '#28a745',
// //               margin: 0,
// //               padding: '8px 16px',
// //               background: 'rgba(40, 167, 69, 0.1)',
// //               borderRadius: '12px',
// //               display: 'inline-block'
// //             }}>
// //               💰 Rp {product.price.toLocaleString('id-ID')}
// //             </p>
// //           </div>
// //         </div>

// //         {/* Order Form */}
// //         <form onSubmit={handleSubmit} style={{
// //           background: 'white',
// //           borderRadius: '16px',
// //           padding: '25px',
// //           boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
// //           marginBottom: '20px'
// //         }}>
// //           <input
// //             type="text"
// //             placeholder="Nama Lengkap"
// //             value={nama}
// //             onChange={(e) => setNama(e.target.value)}
// //             style={{
// //               width: '100%',
// //               padding: '12px 16px',
// //               marginBottom: '15px',
// //               fontSize: '16px',
// //               border: '1px solid #dee2e6',
// //               borderRadius: '8px',
// //               background: '#f8f9fa',
// //               boxSizing: 'border-box'
// //             }}
// //             required
// //             disabled={isSubmitting}
// //           />
          
// //           <textarea
// //             placeholder="Alamat Lengkap"
// //             value={alamat}
// //             onChange={(e) => setAlamat(e.target.value)}
// //             style={{
// //               width: '100%',
// //               padding: '12px 16px',
// //               marginBottom: '15px',
// //               fontSize: '16px',
// //               border: '1px solid #dee2e6',
// //               borderRadius: '8px',
// //               background: '#f8f9fa',
// //               minHeight: '80px',
// //               resize: 'vertical',
// //               fontFamily: 'inherit',
// //               boxSizing: 'border-box'
// //             }}
// //             required
// //             disabled={isSubmitting}
// //           />
          
// //           <input
// //             type="tel"
// //             placeholder="Nomor Whatsapp"
// //             value={telepon}
// //             onChange={(e) => setTelepon(e.target.value)}
// //             style={{
// //               width: '100%',
// //               padding: '12px 16px',
// //               marginBottom: '15px',
// //               fontSize: '16px',
// //               border: '1px solid #dee2e6',
// //               borderRadius: '8px',
// //               background: '#f8f9fa',
// //               boxSizing: 'border-box'
// //             }}
// //             required
// //             disabled={isSubmitting}
// //           />
          
// //           {/* <input
// //             type="number"
// //             placeholder="📦 Jumlah"
// //             min={1}
// //             max={99}
// //             value={jumlah}
// //             onChange={(e) => setJumlah(parseInt(e.target.value) || 1)}
// //             style={{
// //               width: '100%',
// //               padding: '12px 16px',
// //               marginBottom: '15px',
// //               fontSize: '16px',
// //               border: '1px solid #dee2e6',
// //               borderRadius: '8px',
// //               background: '#f8f9fa',
// //               boxSizing: 'border-box'
// //             }}
// //             required
// //             disabled={isSubmitting}
// //           /> */}

// //           {/* Payment Method */}
// //           <div style={{
// //             margin: '20px 0',
// //             padding: '15px',
// //             background: '#f8f9fa',
// //             borderRadius: '8px'
// //           }}>
// //             <p style={{
// //               fontSize: '16px',
// //               fontWeight: '600',
// //               color: '#495057',
// //               margin: '0 0 12px 0'
// //             }}>
// //               💳 Metode Pembayaran:
// //             </p>
            
// //             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
// //               <input
// //                 type="radio"
// //                 id="cod"
// //                 value="COD"
// //                 checked={paymentMethod === "COD"}
// //                 onChange={(e) => setPaymentMethod(e.target.value)}
// //                 disabled={isSubmitting}
// //                 style={{ marginRight: '10px', cursor: 'pointer' }}
// //               />
// //               <label htmlFor="cod" style={{ fontSize: '14px', cursor: 'pointer' }}>
// //                 🚚 COD (Bayar di Tempat)
// //               </label>
// //             </div>
            
// //             <div style={{ display: 'flex', alignItems: 'center' }}>
// //               <input
// //                 type="radio"
// //                 id="transfer"
// //                 value="Transfer"
// //                 checked={paymentMethod === "Transfer"}
// //                 onChange={(e) => setPaymentMethod(e.target.value)}
// //                 disabled={isSubmitting}
// //                 style={{ marginRight: '10px', cursor: 'pointer' }}
// //               />
// //               <label htmlFor="transfer" style={{ fontSize: '14px', cursor: 'pointer' }}>
// //                 🏦 Transfer Bank
// //               </label>
// //             </div>
// //           </div>

// //           {/* Total Price */}
// //           <div style={{
// //             fontSize: '20px',
// //             fontWeight: '700',
// //             color: '#28a745',
// //             textAlign: 'center',
// //             padding: '15px',
// //             margin: '15px 0',
// //             background: 'rgba(40, 167, 69, 0.1)',
// //             borderRadius: '8px'
// //           }}>
// //             💰 Total: Rp {totalHarga.toLocaleString('id-ID')}
// //           </div>

// //           <button 
// //             type="submit"
// //             disabled={isSubmitting}
// //             style={{
// //               width: '100%',
// //               padding: '16px',
// //               fontSize: '16px',
// //               fontWeight: '700',
// //               color: 'white',
// //               background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
// //               border: 'none',
// //               borderRadius: '8px',
// //               cursor: isSubmitting ? 'not-allowed' : 'pointer',
// //               boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)',
// //               opacity: isSubmitting ? 0.7 : 1
// //             }}
// //           >
// //             {isSubmitting ? '⏳ Memproses...' : '🛒 Pesan Sekarang'}
// //           </button>
// //         </form>

// //         {/* Reviews Section */}
// //         {reviews.length > 0 && (
// //           <div style={{
// //             background: 'white',
// //             borderRadius: '16px',
// //             padding: '25px',
// //             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
// //             marginBottom: '20px'
// //           }}>
// //             {/* Review Header */}
// //             <div style={{
// //               display: 'flex',
// //               justifyContent: 'space-between',
// //               alignItems: 'center',
// //               marginBottom: '20px',
// //               paddingBottom: '15px',
// //               borderBottom: '2px solid #f8f9fa'
// //             }}>
// //               <h3 style={{
// //                 fontSize: '20px',
// //                 fontWeight: '700',
// //                 color: '#343a40',
// //                 margin: 0
// //               }}>
// //                 ⭐ Ulasan Produk
// //               </h3>
// //               <div style={{ textAlign: 'right' }}>
// //                 <div style={{
// //                   fontSize: '24px',
// //                   fontWeight: '700',
// //                   color: '#ffc107',
// //                   lineHeight: 1
// //                 }}>
// //                   {avgRating}
// //                 </div>
// //                 <div style={{
// //                   fontSize: '13px',
// //                   color: '#6c757d',
// //                   marginTop: '4px'
// //                 }}>
// //                   {reviews.length} ulasan
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Review List */}
// //             <div>
// //               {reviews.map((review) => (
// //                 <ReviewCard key={review.id} review={review} />
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Trust Indicators */}
// //         <div style={{
// //           padding: '20px',
// //           background: 'rgba(255, 255, 255, 0.8)',
// //           borderRadius: '16px',
// //           textAlign: 'center',
// //           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
// //         }}>
// //           <p style={{ 
// //             color: '#6c757d', 
// //             fontSize: '14px', 
// //             lineHeight: '1.6',
// //             fontWeight: '500',
// //             margin: 0
// //           }}>
// //             ✅ Produk Original | 🚚 Gratis Ongkir | 🔄 Garansi Tukar
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default OrderPage;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { staticProducts } from './produk';
// import { productReviews, Review } from './review';

// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   images: string[];
//   description?: string;
// };

// // Star Rating Component
// function StarRating({ rating }: { rating: number }) {
//   return (
//     <div style={{ display: 'flex', gap: '2px' }}>
//       {[1, 2, 3, 4, 5].map((star) => (
//         <span
//           key={star}
//           style={{
//             color: star <= rating ? '#ffc107' : '#e0e0e0',
//             fontSize: '16px'
//           }}
//         >
//           ★
//         </span>
//       ))}
//     </div>
//   );
// }

// // Review Card Component
// function ReviewCard({ review }: { review: Review }) {
//   const [showAllImages, setShowAllImages] = useState(false);
//   const displayImages = showAllImages ? review.images : review.images?.slice(0, 2);

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '12px',
//       padding: '20px',
//       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
//       marginBottom: '15px'
//     }}>
//       {/* Header */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '12px'
//       }}>
//         <div>
//           <p style={{
//             fontSize: '16px',
//             fontWeight: '600',
//             color: '#343a40',
//             margin: '0 0 4px 0'
//           }}>
//             {review.user}
//           </p>
//           <StarRating rating={review.rating} />
//         </div>
//         <span style={{
//           fontSize: '13px',
//           color: '#6c757d',
//           fontWeight: '500'
//         }}>
//           {new Date(review.date).toLocaleDateString('id-ID', {
//             day: 'numeric',
//             month: 'short',
//             year: 'numeric'
//           })}
//         </span>
//       </div>

//       {/* Comment */}
//       <p style={{
//         fontSize: '14px',
//         color: '#495057',
//         lineHeight: '1.6',
//         margin: '0 0 12px 0'
//       }}>
//         {review.comment}
//       </p>

//       {/* Images */}
//       {review.images && review.images.length > 0 && (
//         <div>
//           <div style={{
//             display: 'flex',
//             gap: '8px',
//             flexWrap: 'wrap',
//             marginBottom: '8px'
//           }}>
//             {displayImages?.map((image, idx) => (
//               <img
//                 key={idx}
//                 src={image}
//                 alt={`Review ${idx + 1}`}
//                 style={{
//                   width: '80px',
//                   height: '80px',
//                   objectFit: 'cover',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease'
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                 }}
//               />
//             ))}
//           </div>
//           {review.images.length > 2 && !showAllImages && (
//             <button
//               onClick={() => setShowAllImages(true)}
//               style={{
//                 background: 'transparent',
//                 border: 'none',
//                 color: '#28a745',
//                 fontSize: '13px',
//                 fontWeight: '600',
//                 cursor: 'pointer',
//                 padding: '4px 0'
//               }}
//             >
//               +{review.images.length - 2} foto lainnya
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // Image Carousel Component
// function ImageCarousel({ images, productName }: { images: string[], productName: string }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goToImage = (index: number) => {
//     setCurrentImageIndex(index);
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       width: '100%',
//       borderRadius: '16px',
//       overflow: 'hidden',
//       background: 'white',
//       boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
//     }}>
//       <div style={{ 
//         position: 'relative',
//         width: '100%',
//         height: '300px',
//         overflow: 'hidden'
//       }}>
//         <img 
//           src={images[currentImageIndex]} 
//           alt={`${productName} - Image ${currentImageIndex + 1}`}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             transition: 'transform 0.3s ease'
//           }}
//         />
        
//         {images.length > 1 && (
//           <>
//             <button
//               onClick={prevImage}
//               style={{
//                 position: 'absolute',
//                 left: '10px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 background: 'rgba(0, 0, 0, 0.6)',
//                 border: 'none',
//                 borderRadius: '50%',
//                 width: '40px',
//                 height: '40px',
//                 color: 'white',
//                 fontSize: '18px',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 transition: 'all 0.3s ease'
//               }}
//             >
//               ←
//             </button>
            
//             <button
//               onClick={nextImage}
//               style={{
//                 position: 'absolute',
//                 right: '10px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 background: 'rgba(0, 0, 0, 0.6)',
//                 border: 'none',
//                 borderRadius: '50%',
//                 width: '40px',
//                 height: '40px',
//                 color: 'white',
//                 fontSize: '18px',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 transition: 'all 0.3s ease'
//               }}
//             >
//               →
//             </button>
//           </>
//         )}

//         <div style={{
//           position: 'absolute',
//           top: '10px',
//           right: '10px',
//           background: 'rgba(0, 0, 0, 0.7)',
//           color: 'white',
//           padding: '4px 8px',
//           borderRadius: '12px',
//           fontSize: '12px',
//           fontWeight: '600'
//         }}>
//           {currentImageIndex + 1} / {images.length}
//         </div>
//       </div>

//       {images.length > 1 && (
//         <div style={{
//           display: 'flex',
//           gap: '8px',
//           padding: '15px',
//           justifyContent: 'center',
//           flexWrap: 'wrap'
//         }}>
//           {images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => goToImage(index)}
//               style={{
//                 border: 'none',
//                 borderRadius: '8px',
//                 padding: '2px',
//                 background: currentImageIndex === index ? '#f8f9fa' : 'transparent',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 opacity: currentImageIndex === index ? 1 : 0.7
//               }}
//             >
//               <img
//                 src={image}
//                 alt={`Thumbnail ${index + 1}`}
//                 style={{
//                   width: '50px',
//                   height: '50px',
//                   objectFit: 'cover',
//                   borderRadius: '6px',
//                   display: 'block'
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// function OrderPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { productId } = useParams<{ productId: string }>();
  
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [reviews, setReviews] = useState<Review[]>([]);
  
//   const [nama, setNama] = useState("");
//   const [alamat, setAlamat] = useState("");
//   const [telepon, setTelepon] = useState("");
//   const [jumlah, setJumlah] = useState(1);
//   const [paymentMethod, setPaymentMethod] = useState("COD");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     let foundProduct: Product | null = null;

//     if (location.state && typeof location.state === 'object' && 'id' in location.state) {
//       foundProduct = location.state as Product;
//     } else if (productId) {
//       const id = parseInt(productId);
//       foundProduct = staticProducts.find(p => p.id === id) || null;
//     }

//     setProduct(foundProduct);
    
//     // Load reviews for this product
//     if (foundProduct !== null) {
//       const productReviewsList = productReviews.filter(r => r.productId === foundProduct!.id);
//       setReviews(productReviewsList);
//     }
    
//     setLoading(false);

//     if (foundProduct !== null && !productId) {
//       navigate(`/order/${foundProduct.id}`, { replace: true });
//     }
//   }, [productId, location.state, navigate]);

//   const totalHarga = (product?.price ?? 0) * jumlah;

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!product) {
//       alert("❌ Data produk tidak ditemukan!");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const totalHarga = product.price * jumlah;

//       const orderData = {
//         nama: nama.trim(),
//         alamat: alamat.trim(),
//         telepon: telepon.trim(),
//         produk: product.name,
//         productId: product.id,
//         jumlah: jumlah,
//         totalHarga: totalHarga,
//         metodePembayaran: paymentMethod,
//         timestamp: new Date().toISOString()
//       };

//       // Simpan ke Google Sheets
//       await fetch("https://script.google.com/macros/s/AKfycbyFTX7kiBl_8f6mHDZ_oVByx7fOhch56fUNgoU4JiKnnoyz5RYDX6ZzWgTz02gPl5HJ/exec", {
//         method: "POST",
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(orderData)
//       });

//       // Generate order ID (simple timestamp-based)
//       const orderId = Date.now().toString();

//       // Tampilkan alert sukses
//       alert("✅ Pesanan berhasil dikirim! Data telah tersimpan.");

//       // Reset form
//       setNama("");
//       setAlamat("");
//       setTelepon("");
//       setJumlah(1);
//       setPaymentMethod("COD");

//       // Navigate ke halaman order success dengan order ID dan data
//       navigate(`/ordersuccess/${orderId}`, {
//         state: { orderData }
//       });

//     } catch (error) {
//       console.error("Error details:", error);
//       alert("❌ Terjadi kesalahan saat mengirim data. Silakan coba lagi atau hubungi admin.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div style={{ 
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: '#343a40'
//       }}>
//         <p style={{ fontSize: '18px', fontWeight: '600' }}>⏳ Memuat produk...</p>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div style={{ 
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: '#343a40',
//         flexDirection: 'column',
//         gap: '20px'
//       }}>
//         <p style={{ fontSize: '18px', fontWeight: '600' }}>❌ Produk tidak ditemukan.</p>
//         <button 
//           onClick={() => navigate('/')}
//           style={{
//             background: 'linear-gradient(135deg, #495057 0%, #6c757d 100%)',
//             border: 'none',
//             padding: '12px 24px',
//             borderRadius: '12px',
//             color: 'white',
//             cursor: 'pointer',
//             fontSize: '16px',
//             fontWeight: '600',
//             boxShadow: '0 4px 16px rgba(73, 80, 87, 0.2)'
//           }}
//         >
//           🏠 Kembali ke Beranda
//         </button>
//       </div>
//     );
//   }

//   const avgRating = reviews.length > 0 
//     ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
//     : '0.0';

//   return (
//     <div style={{ 
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
//       padding: '20px'
//     }}>
//       <div style={{ 
//         maxWidth: '600px', 
//         margin: '0 auto'
//       }}>
//         {/* Back Button */}
//         <button 
//           onClick={() => navigate('/')}
//           style={{
//             background: 'white',
//             border: 'none',
//             padding: '12px 20px',
//             borderRadius: '12px',
//             color: '#495057',
//             cursor: 'pointer',
//             fontSize: '14px',
//             fontWeight: '600',
//             marginBottom: '20px',
//             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
//           }}
//         >
//           ← Kembali
//         </button>

//         <h2 style={{
//           fontSize: '1.8rem',
//           fontWeight: '700',
//           color: '#343a40',
//           marginBottom: '25px',
//           textAlign: 'center'
//         }}>
//           Detail Pemesanan
//         </h2>
        
//         {/* Product Preview */}
//         <div style={{
//           background: 'white',
//           borderRadius: '16px',
//           padding: '20px',
//           marginBottom: '25px',
//           boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
//         }}>
//           <ImageCarousel images={product.images} productName={product.name} />
          
//           <div style={{ textAlign: 'center', marginTop: '20px' }}>
//             <h3 style={{ 
//               fontSize: '24px', 
//               fontWeight: '700',
//               color: '#343a40',
//               marginBottom: '8px'
//             }}>
//               {product.name}
//             </h3>

//             {product.description && (
//               <p style={{
//                 fontSize: '14px',
//                 color: '#6c757d',
//                 marginBottom: '15px',
//                 lineHeight: '1.5',
//                 fontStyle: 'italic'
//               }}>
//                 {product.description}
//               </p>
//             )}
            
//             <p style={{ 
//               fontSize: '20px', 
//               fontWeight: '700',
//               color: '#28a745',
//               margin: 0,
//               padding: '8px 16px',
//               background: 'rgba(40, 167, 69, 0.1)',
//               borderRadius: '12px',
//               display: 'inline-block'
//             }}>
//               💰 Rp {product.price.toLocaleString('id-ID')}
//             </p>
//           </div>
//         </div>

//         {/* Order Form */}
//         <form onSubmit={handleSubmit} style={{
//           background: 'white',
//           borderRadius: '16px',
//           padding: '25px',
//           boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
//           marginBottom: '20px'
//         }}>
//           <input
//             type="text"
//             placeholder="Nama Lengkap"
//             value={nama}
//             onChange={(e) => setNama(e.target.value)}
//             style={{
//               width: '100%',
//               padding: '12px 16px',
//               marginBottom: '15px',
//               fontSize: '16px',
//               border: '1px solid #dee2e6',
//               borderRadius: '8px',
//               background: '#f8f9fa',
//               boxSizing: 'border-box'
//             }}
//             required
//             disabled={isSubmitting}
//           />
          
//           <textarea
//             placeholder="Alamat Lengkap"
//             value={alamat}
//             onChange={(e) => setAlamat(e.target.value)}
//             style={{
//               width: '100%',
//               padding: '12px 16px',
//               marginBottom: '15px',
//               fontSize: '16px',
//               border: '1px solid #dee2e6',
//               borderRadius: '8px',
//               background: '#f8f9fa',
//               minHeight: '80px',
//               resize: 'vertical',
//               fontFamily: 'inherit',
//               boxSizing: 'border-box'
//             }}
//             required
//             disabled={isSubmitting}
//           />
          
//           <input
//             type="tel"
//             placeholder="Nomor Whatsapp"
//             value={telepon}
//             onChange={(e) => setTelepon(e.target.value)}
//             style={{
//               width: '100%',
//               padding: '12px 16px',
//               marginBottom: '15px',
//               fontSize: '16px',
//               border: '1px solid #dee2e6',
//               borderRadius: '8px',
//               background: '#f8f9fa',
//               boxSizing: 'border-box'
//             }}
//             required
//             disabled={isSubmitting}
//           />

//           {/* Payment Method */}
//           <div style={{
//             margin: '20px 0',
//             padding: '15px',
//             background: '#f8f9fa',
//             borderRadius: '8px'
//           }}>
//             <p style={{
//               fontSize: '16px',
//               fontWeight: '600',
//               color: '#495057',
//               margin: '0 0 12px 0'
//             }}>
//               💳 Metode Pembayaran:
//             </p>
            
//             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//               <input
//                 type="radio"
//                 id="cod"
//                 value="COD"
//                 checked={paymentMethod === "COD"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 disabled={isSubmitting}
//                 style={{ marginRight: '10px', cursor: 'pointer' }}
//               />
//               <label htmlFor="cod" style={{ fontSize: '14px', cursor: 'pointer' }}>
//                 🚚 COD (Bayar di Tempat)
//               </label>
//             </div>
            
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <input
//                 type="radio"
//                 id="transfer"
//                 value="Transfer"
//                 checked={paymentMethod === "Transfer"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 disabled={isSubmitting}
//                 style={{ marginRight: '10px', cursor: 'pointer' }}
//               />
//               <label htmlFor="transfer" style={{ fontSize: '14px', cursor: 'pointer' }}>
//                 🏦 Transfer Bank
//               </label>
//             </div>
//           </div>

//           {/* Total Price */}
//           <div style={{
//             fontSize: '20px',
//             fontWeight: '700',
//             color: '#28a745',
//             textAlign: 'center',
//             padding: '15px',
//             margin: '15px 0',
//             background: 'rgba(40, 167, 69, 0.1)',
//             borderRadius: '8px'
//           }}>
//             💰 Total: Rp {totalHarga.toLocaleString('id-ID')}
//           </div>

//           <button 
//             type="submit"
//             disabled={isSubmitting}
//             style={{
//               width: '100%',
//               padding: '16px',
//               fontSize: '16px',
//               fontWeight: '700',
//               color: 'white',
//               background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
//               border: 'none',
//               borderRadius: '8px',
//               cursor: isSubmitting ? 'not-allowed' : 'pointer',
//               boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)',
//               opacity: isSubmitting ? 0.7 : 1
//             }}
//           >
//             {isSubmitting ? '⏳ Memproses...' : '🛒 Pesan Sekarang'}
//           </button>
//         </form>

//         {/* Reviews Section */}
//         {reviews.length > 0 && (
//           <div style={{
//             background: 'white',
//             borderRadius: '16px',
//             padding: '25px',
//             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
//             marginBottom: '20px'
//           }}>
//             {/* Review Header */}
//             <div style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '20px',
//               paddingBottom: '15px',
//               borderBottom: '2px solid #f8f9fa'
//             }}>
//               <h3 style={{
//                 fontSize: '20px',
//                 fontWeight: '700',
//                 color: '#343a40',
//                 margin: 0
//               }}>
//                 ⭐ Ulasan Produk
//               </h3>
//               <div style={{ textAlign: 'right' }}>
//                 <div style={{
//                   fontSize: '24px',
//                   fontWeight: '700',
//                   color: '#ffc107',
//                   lineHeight: 1
//                 }}>
//                   {avgRating}
//                 </div>
//                 <div style={{
//                   fontSize: '13px',
//                   color: '#6c757d',
//                   marginTop: '4px'
//                 }}>
//                   {reviews.length} ulasan
//                 </div>
//               </div>
//             </div>

//             {/* Review List */}
//             <div>
//               {reviews.map((review) => (
//                 <ReviewCard key={review.id} review={review} />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Trust Indicators */}
//         <div style={{
//           padding: '20px',
//           background: 'rgba(255, 255, 255, 0.8)',
//           borderRadius: '16px',
//           textAlign: 'center',
//           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
//         }}>
//           <p style={{ 
//             color: '#6c757d', 
//             fontSize: '14px', 
//             lineHeight: '1.6',
//             fontWeight: '500',
//             margin: 0
//           }}>
//             ✅ Produk Original | 🚚 Gratis Ongkir | 🔄 Garansi Tukar
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderPage;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { staticProducts } from './produk';
import { productReviews, Review } from './review';

type Product = {
  id: number;
  name: string;
  price: number;
  images: string[];
  description?: string;
};

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            color: star <= rating ? '#ffc107' : '#e0e0e0',
            fontSize: '16px'
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// Review Card Component
function ReviewCard({ review }: { review: Review }) {
  const [showAllImages, setShowAllImages] = useState(false);
  const displayImages = showAllImages ? review.images : review.images?.slice(0, 2);

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      marginBottom: '15px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <div>
          <p style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#343a40',
            margin: '0 0 4px 0'
          }}>
            {review.user}
          </p>
          <StarRating rating={review.rating} />
        </div>
        <span style={{
          fontSize: '13px',
          color: '#6c757d',
          fontWeight: '500'
        }}>
          {new Date(review.date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </span>
      </div>

      <p style={{
        fontSize: '14px',
        color: '#495057',
        lineHeight: '1.6',
        margin: '0 0 12px 0'
      }}>
        {review.comment}
      </p>

      {review.images && review.images.length > 0 && (
        <div>
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '8px'
          }}>
            {displayImages?.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Review ${idx + 1}`}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            ))}
          </div>
          {review.images.length > 2 && !showAllImages && (
            <button
              onClick={() => setShowAllImages(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#28a745',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '4px 0'
              }}
            >
              +{review.images.length - 2} foto lainnya
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// Image Carousel Component
function ImageCarousel({ images, productName }: { images: string[], productName: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      borderRadius: '16px',
      overflow: 'hidden',
      background: 'white',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
    }}>
      <div style={{ 
        position: 'relative',
        width: '100%',
        height: '300px',
        overflow: 'hidden'
      }}>
        <img 
          src={images[currentImageIndex]} 
          alt={`${productName} - Image ${currentImageIndex + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.6)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              ←
            </button>
            
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.6)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              →
            </button>
          </>
        )}

        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600'
        }}>
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '8px',
          padding: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              style={{
                border: 'none',
                borderRadius: '8px',
                padding: '2px',
                background: currentImageIndex === index ? '#f8f9fa' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: currentImageIndex === index ? 1 : 0.7
              }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  display: 'block'
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [jumlah, setJumlah] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log('🔍 OrderPage - useEffect triggered');
    console.log('📍 Location state:', location.state);
    console.log('🆔 Product ID from params:', productId);
    
    let foundProduct: Product | null = null;

    if (location.state && typeof location.state === 'object' && 'id' in location.state) {
      foundProduct = location.state as Product;
      console.log('✅ Product found from location.state:', foundProduct);
    } else if (productId) {
      const id = parseInt(productId);
      foundProduct = staticProducts.find(p => p.id === id) || null;
      console.log('✅ Product found from staticProducts:', foundProduct);
    }

    setProduct(foundProduct);
    
    if (foundProduct !== null) {
      const productReviewsList = productReviews.filter(r => r.productId === foundProduct!.id);
      console.log('⭐ Reviews loaded:', productReviewsList);
      setReviews(productReviewsList);
    }
    
    setLoading(false);

    if (foundProduct !== null && !productId) {
      console.log('🔄 Navigating to:', `/order/${foundProduct.id}`);
      navigate(`/order/${foundProduct.id}`, { replace: true });
    }
  }, [productId, location.state, navigate]);

  const totalHarga = (product?.price ?? 0) * jumlah;
// Update bagian handleSubmit di order.tsx

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  console.log('📝 Form submission started');
  
  if (!product) {
    console.error('❌ Product not found!');
    alert("❌ Data produk tidak ditemukan!");
    return;
  }

  setIsSubmitting(true);

  try {
    const totalHarga = product.price * jumlah;
    
    // Generate order ID
    const orderId = Date.now().toString();

    const orderData = {
      orderId: orderId,
      nama: nama.trim(),
      alamat: alamat.trim(),
      telepon: telepon.trim(),
      produk: product.name,
      productId: product.id,
      jumlah: jumlah,
      totalHarga: totalHarga,
      metodePembayaran: paymentMethod,
      timestamp: new Date().toISOString()
    };

    console.log('📦 Order Data:', orderData);

    // 1. Kirim ke Google Sheets (tetap dipertahankan)
    console.log('🚀 Sending to Google Sheets...');
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyFTX7kiBl_8f6mHDZ_oVByx7fOhch56fUNgoU4JiKnnoyz5RYDX6ZzWgTz02gPl5HJ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData)
      });
      console.log('✅ Data sent to Google Sheets');
    } catch (sheetError) {
      console.error('⚠️ Google Sheets error (non-critical):', sheetError);
    }

    // 2. Kirim ke MongoDB melalui Flask Backend
    // console.log('🚀 Sending to MongoDB...');
    // const mongoResponse = await fetch("http://localhost:5000/api/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(orderData)
    // });
    const mongoResponse = await fetch("https://nex-store-backend-new-s9zu.vercel.app/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData)
    });


    if (!mongoResponse.ok) {
      throw new Error(`MongoDB API error: ${mongoResponse.status}`);
    }

    const mongoResult = await mongoResponse.json();
    console.log('✅ Data saved to MongoDB:', mongoResult);

    // Tampilkan alert sukses
    alert("✅ Pesanan berhasil dikirim! Data telah tersimpan.");

    // Reset form
    console.log('🔄 Resetting form...');
    setNama("");
    setAlamat("");
    setTelepon("");
    setJumlah(1);
    setPaymentMethod("COD");

    // Navigate ke halaman order success
    console.log('🔄 Navigating to order success page...');
    navigate(`/ordersuccess/${orderId}`, {
      state: { orderData }
    });

    console.log('✅ Order process completed successfully');

  } catch (error) {
    console.error("❌ Error details:", error);
    console.error("❌ Error stack:", error instanceof Error ? error.stack : 'No stack trace');
    alert("❌ Terjadi kesalahan saat mengirim data. Silakan coba lagi atau hubungi admin.");
  } finally {
    setIsSubmitting(false);
    console.log('🏁 Form submission finished');
  }
};
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   console.log('📝 Form submission started');
    
  //   if (!product) {
  //     console.error('❌ Product not found!');
  //     alert("❌ Data produk tidak ditemukan!");
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     const totalHarga = product.price * jumlah;

  //     const orderData = {
  //       nama: nama.trim(),
  //       alamat: alamat.trim(),
  //       telepon: telepon.trim(),
  //       produk: product.name,
  //       productId: product.id,
  //       jumlah: jumlah,
  //       totalHarga: totalHarga,
  //       metodePembayaran: paymentMethod,
  //       timestamp: new Date().toISOString()
  //     };

  //     console.log('📦 Order Data:', orderData);
  //     console.log('📊 Order Data (formatted):', JSON.stringify(orderData, null, 2));

  //     // Simpan ke Google Sheets
  //     console.log('🚀 Sending to Google Sheets...');
  //     const response = await fetch("https://script.google.com/macros/s/AKfycbyFTX7kiBl_8f6mHDZ_oVByx7fOhch56fUNgoU4JiKnnoyz5RYDX6ZzWgTz02gPl5HJ/exec", {
  //       method: "POST",
  //       mode: "no-cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(orderData)
  //     });
      
  //     console.log('✅ Data sent to Google Sheets');
  //     console.log('📡 Response:', response);

  //     // Generate order ID
  //     const orderId = Date.now().toString();
  //     console.log('🔢 Generated Order ID:', orderId);

  //     // Tampilkan alert sukses
  //     alert("✅ Pesanan berhasil dikirim! Data telah tersimpan.");

  //     // Reset form
  //     console.log('🔄 Resetting form...');
  //     setNama("");
  //     setAlamat("");
  //     setTelepon("");
  //     setJumlah(1);
  //     setPaymentMethod("COD");

  //     // Navigate ke halaman order success
  //     console.log('🔄 Navigating to order success page...');
  //     navigate(`/ordersuccess/${orderId}`, {
  //       state: { orderData }
  //     });

  //     console.log('✅ Order process completed successfully');

  //   } catch (error) {
  //     console.error("❌ Error details:", error);
  //     console.error("❌ Error stack:", error instanceof Error ? error.stack : 'No stack trace');
  //     alert("❌ Terjadi kesalahan saat mengirim data. Silakan coba lagi atau hubungi admin.");
  //   } finally {
  //     setIsSubmitting(false);
  //     console.log('🏁 Form submission finished');
  //   }
  // };

  // Log form field changes
  useEffect(() => {
    console.log('👤 Nama updated:', nama);
  }, [nama]);

  useEffect(() => {
    console.log('📍 Alamat updated:', alamat);
  }, [alamat]);

  useEffect(() => {
    console.log('📱 Telepon updated:', telepon);
  }, [telepon]);

  useEffect(() => {
    console.log('🔢 Jumlah updated:', jumlah);
  }, [jumlah]);

  useEffect(() => {
    console.log('💳 Payment method updated:', paymentMethod);
  }, [paymentMethod]);

  if (loading) {
    console.log('⏳ Loading state active');
    return (
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#343a40'
      }}>
        <p style={{ fontSize: '18px', fontWeight: '600' }}>⏳ Memuat produk...</p>
      </div>
    );
  }

  if (!product) {
    console.log('❌ Product not found - showing error state');
    return (
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#343a40',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <p style={{ fontSize: '18px', fontWeight: '600' }}>❌ Produk tidak ditemukan.</p>
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

  const avgRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  console.log('📊 Average Rating:', avgRating);
  console.log('💰 Total Harga:', totalHarga);

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
        <button 
          onClick={() => navigate('/')}
          style={{
            background: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '12px',
            color: '#495057',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}
        >
          ← Kembali
        </button>

        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#343a40',
          marginBottom: '25px',
          textAlign: 'center'
        }}>
          Detail Pemesanan
        </h2>
        
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '25px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
        }}>
          <ImageCarousel images={product.images} productName={product.name} />
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700',
              color: '#343a40',
              marginBottom: '8px'
            }}>
              {product.name}
            </h3>

            {product.description && (
              <p style={{
                fontSize: '14px',
                color: '#6c757d',
                marginBottom: '15px',
                lineHeight: '1.5',
                fontStyle: 'italic'
              }}>
                {product.description}
              </p>
            )}
            
            <p style={{ 
              fontSize: '20px', 
              fontWeight: '700',
              color: '#28a745',
              margin: 0,
              padding: '8px 16px',
              background: 'rgba(40, 167, 69, 0.1)',
              borderRadius: '12px',
              display: 'inline-block'
            }}>
              💰 Rp {product.price.toLocaleString('id-ID')}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{
          background: 'white',
          borderRadius: '16px',
          padding: '25px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          marginBottom: '20px'
        }}>
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              marginBottom: '15px',
              fontSize: '16px',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              background: '#f8f9fa',
              boxSizing: 'border-box'
            }}
            required
            disabled={isSubmitting}
          />
          
          <textarea
            placeholder="Alamat Lengkap"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              marginBottom: '15px',
              fontSize: '16px',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              background: '#f8f9fa',
              minHeight: '80px',
              resize: 'vertical',
              fontFamily: 'inherit',
              boxSizing: 'border-box'
            }}
            required
            disabled={isSubmitting}
          />
          
          <input
            type="tel"
            placeholder="Nomor Whatsapp"
            value={telepon}
            onChange={(e) => setTelepon(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              marginBottom: '15px',
              fontSize: '16px',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              background: '#f8f9fa',
              boxSizing: 'border-box'
            }}
            required
            disabled={isSubmitting}
          />

          <div style={{
            margin: '20px 0',
            padding: '15px',
            background: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <p style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#495057',
              margin: '0 0 12px 0'
            }}>
              💳 Metode Pembayaran:
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input
                type="radio"
                id="cod"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                disabled={isSubmitting}
                style={{ marginRight: '10px', cursor: 'pointer' }}
              />
              <label htmlFor="cod" style={{ fontSize: '14px', cursor: 'pointer' }}>
                🚚 COD (Bayar di Tempat)
              </label>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="radio"
                id="transfer"
                value="Transfer"
                checked={paymentMethod === "Transfer"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                disabled={isSubmitting}
                style={{ marginRight: '10px', cursor: 'pointer' }}
              />
              <label htmlFor="transfer" style={{ fontSize: '14px', cursor: 'pointer' }}>
                🏦 Transfer Bank
              </label>
            </div>
          </div>

          <div style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#28a745',
            textAlign: 'center',
            padding: '15px',
            margin: '15px 0',
            background: 'rgba(40, 167, 69, 0.1)',
            borderRadius: '8px'
          }}>
            💰 Total: Rp {totalHarga.toLocaleString('id-ID')}
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '16px',
              fontWeight: '700',
              color: 'white',
              background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
              border: 'none',
              borderRadius: '8px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)',
              opacity: isSubmitting ? 0.7 : 1
            }}
          >
            {isSubmitting ? '⏳ Memproses...' : '🛒 Pesan Sekarang'}
          </button>
        </form>

        {reviews.length > 0 && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '25px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            marginBottom: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              paddingBottom: '15px',
              borderBottom: '2px solid #f8f9fa'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#343a40',
                margin: 0
              }}>
                ⭐ Ulasan Produk
              </h3>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#ffc107',
                  lineHeight: 1
                }}>
                  {avgRating}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#6c757d',
                  marginTop: '4px'
                }}>
                  {reviews.length} ulasan
                </div>
              </div>
            </div>

            <div>
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}

        <div style={{
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
        }}>
          <p style={{ 
            color: '#6c757d', 
            fontSize: '14px', 
            lineHeight: '1.6',
            fontWeight: '500',
            margin: 0
          }}>
            ✅ Produk Original | 🚚 Gratis Ongkir | 🔄 Garansi Tukar
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
