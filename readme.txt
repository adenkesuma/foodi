# Nama Tim: Foodi
# Github Repository: https://github.com/adenkesuma/foodi
# Project : Online Store (food)
# Grub 3

# Anggota
- 221111805 Aden Kesuma
- 221110164 Christine Gleania
- 221110139 Elly Sintya
- 221110551 Vania

# Cakupan Project
- project memiliki fitur login, register, dan update profile
- user bisa memesan makanan yang mana makanan yang di pesan akan dimasukan ke dalam cart atau daftar pesanan mereka, dan mereka bisa melihat total harga dan seluruh menu yang mereka pesan
- dan menu pada makanan terdapat beberapa kategory yaitu (salad, pizza, soup, dessert, drink)
- terdapat fitur authorization yang mana hanya user dengan role admin yang bisa masuk ke dashboard menu
- terdapat fitur dashboard admin
- di dashboard admin terdapat fitur:
  1. melihat semua users yang pernah mendaftar atau register, bisa melihat semua role mereka apakah mereka admin atau user, dan juga bisa menghapus akun mereka 
  2. manage items, jadi semua items menu bisa di update ataupun di delete
  3. adanya fitur menambah item menu: item menu yang perlu dimasukan ketika ingin menambah menu adalah (foodName, category, price, foodDetails, imageFood)


# Bobot Project
- Pendaftaran pengguna memanfaat authentikasi. fitur authentikasi terdapat pada alamat /register dan /login. 
- Adanya fitur authorisasi pada alamat /dashboard
- Menggunakan fitur verifyToken dan verifyAdmin di middleware
- Menggunakan ODM (mongoose) untuk koneksi ke database MongoDB
- Menggunakan struktur file secara modular dan dikelompokkan secara rapi 
- Database di deploy secara online di Mongodb Atlas 
- Memanfaatkan DaisyUi sebagai framework css
- Menggunakan ReactRouterDom
- Menggunakan Firebase sebagai OAuth 
- Tampilan User Interface yang bagus dan Modern
- Menggunakan nested route pada react router dom
- Melakukan validasi apakah user tersebut role nya sebagai admin atau user untuk masuk ke dashboard admin 
- Melakukan validasi pada bagian order food
 
