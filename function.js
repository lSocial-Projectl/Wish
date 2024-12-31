
  
    
    
    
    
    
   
    
    
function Share(){
  const message = "🎊.HAPPY NEW YEAR.🎊 😁 Best wishes from your friend. 🥳This Year will bring you so much Joy , Fun , and lots of Happy.... Check out this line 👇👇👇"+"https://google.com"; 
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
  
  // Redirect to WhatsApp with the pre-filled message
  window.open(whatsappURL, "_blank");
}   
    
    
    