const phone='5563992727190';
const msg='Olá Paulo Henrique, vim pelo seu site e gostaria de mais informações.';
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;a.target='_blank';a.rel='noopener'});
