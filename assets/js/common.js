//Dark theme
  const theme = document.querySelector("#themeToggle");
  theme.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    theme.innerHTML = '☀️ Light';
    theme.classList.add('bg-light','text-dark');
  }else{
    theme.innerHTML = '🌙 Dark';
    theme.classList.remove('bg-light','text-dark');
  }
  });
  