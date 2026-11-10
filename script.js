async function loadHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    try {
        const response = await fetch('header.html');
        const html = await response.text();
        placeholder.innerHTML = html;
        
        // Add classes from placeholder to the loaded header
        const header = placeholder.querySelector('header');
        if (header && placeholder.dataset.class) {
            placeholder.dataset.class.split(' ').forEach(cls => header.classList.add(cls));
        }
        
        initializeHeader();
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

async function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    try {
        const response = await fetch('footer.html');
        const html = await response.text();
        placeholder.innerHTML = html;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}


function initializeHeader() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '✕';
            } else {
                mobileMenuBtn.innerHTML = '☰';
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '☰';
            });
        });
    }

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

const kytDealers = [
  { name: "Biker's Hub", city: "Vishakhapatnam", state: "Andhra Pradesh", address: "D.No. 51-17-41, Kranthi Nagar, Behind Jayabheri Maruti Suzuki, Maddilapalem, Vishakapatnam, Andhra Pradesh 530022", phone: "8978451732", map: "https://g.page/bikers-hub-visakhapatnam?share" },
  { name: "V Gears", city: "Vishakhapatnam", state: "Andhra Pradesh", address: "44-5-79, 80 Feet Road, Opposite Water Tank, Akkayyapalem, Vishakhapatnam, Andhra Pradesh 530016", phone: "7032316261", map: "https://goo.gl/maps/kBhQtXGHEidYkYoa6" },
  { name: "Bikers Shoppee", city: "Tinsukia", state: "Assam", address: "Madrasa Complex, Ground floor, Rangagora Rd, opp. Bhutia Market, Tinsukia, Assam 786125", phone: "8486611916", map: "https://goo.gl/maps/a7eciwaSEkUZsJHM8" },
  { name: "Let's Gear Up", city: "Bengaluru", state: "Karnataka", address: "2nd Floor, 819, 27th Main Road, Sector 1HSR Layout, Bengaluru 560102", phone: "99015 50880", map: "https://kytindia.com/Link" },
  { name: "Motoblazer", city: "Bengaluru", state: "Karnataka", address: "1597, 20th Main, 1st Sector HSR Layout, Bengaluru - 560102", phone: "78992 60004", map: "https://g.page/Highlanderhsr?share" },
  { name: "Race Nation", city: "Bengaluru", state: "Karnataka", address: "27th C Cross, #91, 8, 14th Main Road, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560011", phone: "97392 23377", map: "https://g.page/racenation?share" },
  { name: "SKYLER AUTOMOTIVE LLP (6KIOM)", city: "Bengaluru", state: "Karnataka", address: "10/2, Khivraj Mansions, Kasturba Road, Bengaluru, Karnataka 560002", phone: "99004 06000", map: "https://maps.app.goo.gl/mRzZtBCL1GTQxfrq6" },
  { name: "Orion Motors", city: "Bengaluru", state: "Karnataka", address: "#518, 1st Floor, Above Orion Suzuki, Bhoovanappa Layout, Opp The Forum, Hosur Road, Koramangala, Bengaluru 560029", phone: "99020 77488", map: "https://goo.gl/maps/ASHxiKpgcfLNTMSt5" },
  { name: "Probikers", city: "Mysuru", state: "Karnataka", address: "NO 4, 1274/1A -D1, HARI PLAZA D ALLAMMA'S COMMERCIAL COMPLEX, Dewans Road, MY, Mysuru, Karnataka 570001", phone: "0821 428 8824", map: "https://goo.gl/maps/urq5ERh2GorQm17E6" },
  { name: "Real Accessories", city: "Kozhikode", state: "Kerala", address: "YMCA Cross Rd, Kozhikode, Kerala 673004", phone: "9895366333", map: "https://goo.gl/maps/2dtnRzLC9BQ7wjuz7" },
  { name: "Corsagram", city: "Kochi", state: "Kerala", address: "52/3317 MGC Plaza, near thykoodam bridge, nh47 vytilla kochi NH 47, near Church Road, Vyttila, Kochi, Kerala 682019", phone: "7591909393", map: "https://kytindia.com/Link" },
  { name: "DJ Helmets", city: "Kochi", state: "Kerala", address: "Metro Pillar No.465, Metro Station, Palarivatom- Edapally , Near Changampuzha Park, Edappally, Kochi, Kerala 682024", phone: "9846011011", map: "https://goo.gl/maps/gNYvQ1j3WomnKTWt7" },
  { name: "Club 46 Pitstop", city: "Thalassery", state: "Kerala", address: "Customs road, Chalil, Thalassery, Kerala 670101", phone: "9656150657", map: "https://goo.gl/maps/3krHzqVbdJFGzaHL7" },
  { name: "Jeron Helmets", city: "Kottayam", state: "Kerala", address: "T.B Junction, SH 1, opposite Hotel Aida, Kottayam, Kerala 686001", phone: "9495691583", map: "https://goo.gl/maps/C9EQXJDQUQFSzcZw9" },
  { name: "Bike Studio TVM", city: "Thiruvananthapuram", state: "Kerala", address: "20/2378, Panvel - Kochi - Kanyakumari Hwy, Rd, Karamana, Thiruvananthapuram, Kerala 695002", phone: "6238946464", map: "https://goo.gl/maps/NsheWu83DdRLHRkF6" },
  { name: "The Helmet World", city: "Thiruvananthapuram", state: "Kerala", address: "1st Floor, Lower Bain'S Compound, Museum - Nanthencode Rd, LMS Compound, Nanthancodu, Thiruvananthapuram, Kerala 695003", phone: "9995557766", map: "https://goo.gl/maps/RG39B3246sRaSCAJA" },
  { name: "Speed Merchant", city: "Mumbai", state: "Maharashtra", address: "Shop No. 45, Atria Mall, Worli, Mumbai, Maharashtra 400018", phone: "9833292432", map: "https://maps.app.goo.gl/q5Lc1d7ykQLUKCnw7" },
  { name: "AH Helmets", city: "Mumbai", state: "Maharashtra", address: "632 ADARSH NAGAR, New Link Rd, Oshiwara, Andheri West, Mumbai, Maharashtra 400053", phone: "9769902249", map: "https://goo.gl/maps/92p2wcrfyiF4oWu66" },
  { name: "Throttle Culture", city: "Shillong", state: "Meghalaya", address: "Keating Rd, beside Frank Yamaha Showroom, Secretariat Hills, Shillong, Meghalaya 793001", phone: "9774184852", map: "https://goo.gl/maps/ZSfJSk4U3a96P9Sb8" },
  { name: "Ramthar Auto Works (RAW)", city: "Aizawl", state: "Mizoram", address: "Zarkawt, Aizawl, Mizoram 796001", phone: "9862775330", map: "https://goo.gl/maps/Enq6hS9Xx724qa1z5" },
  { name: "Chopra Helmets", city: "New Delhi", state: "New Delhi", address: "1709A, Arya Samaj Rd, opposite kotak mahindra bank, Block 26I, Nai Walan, Karol Bagh, New Delhi, Delhi 110005", phone: "9711667897", map: "https://goo.gl/maps/rXfmfQRWftzdPZ3u9" },
  { name: "Redline Racing Store", city: "New Delhi", state: "New Delhi", address: "First Floor, A-21/19, Block A, Naraina Industrial Area Phase 2, Naraina, Delhi, 110028", phone: "9899562622", map: "https://goo.gl/maps/3cb7YUaHUYqcsbHi8" },
  { name: "The Roadies", city: "Rourkela", state: "Odisha", address: "Plot No:. 409/1972 1st Floor Gafur Colony C/o : S .S Sales Corporation, in front of state Bank, Udit Nagar, Rourkela, Odisha 769012", phone: "7077363693", map: "https://goo.gl/maps/Sp9Kfr2sgUhX9G6q9" },
  { name: "Gears", city: "Chennai", state: "Tamil Nadu", address: "17A, BARATHI NAGAR, TARAMANI, LINK ROAD, Velachery, Chennai, Tamil Nadu 600113", phone: "9840537814", map: "https://goo.gl/maps/RRN8Zx9rJgrKaFqCA" },
  { name: "Throttlerz Pitstop", city: "Coimbatore", state: "Tamil Nadu", address: "411 veejay capella complex, 3, Cross Cut Rd, Peranaidu Layout, Gandhipuram, Tamil Nadu 641012", phone: "4224214722", map: "https://goo.gl/maps/TCAw5tC8juNau1CPA" },
  { name: "Motor 360", city: "Erode", state: "Tamil Nadu", address: "543, Perundurai Rd, opp. to Sakthi Supermarket, Nggo Colony, Erode, Tamil Nadu 638011", phone: "6379441102", map: "https://goo.gl/maps/6XRvZ35w2zEZ5q2y8" },
  { name: "Gears Nagercoil", city: "Nagercoil", state: "Tamil Nadu", address: "NO:32/A, Beach Rd, junction, Nagercoil, Tamil Nadu 629002", phone: "8903947474", map: "https://goo.gl/maps/429HnziggAVoUaDL8" },
  { name: "ER Biker's World", city: "Thoothukudi", state: "Tamil Nadu", address: "nisha Water Service, 30B Toovipuram main road, 8th St, Toovipuram, Thoothukudi, Tamil Nadu 628008", phone: "9514395841", map: "https://goo.gl/maps/2G6bTEVoiUG7zZoEA" },
  { name: "Dynamic Ryderz", city: "Hyderabad", state: "Telangana", address: "Road No 12, Banjara Hills, Hyderabad, Telangana 500034", phone: "80084 99983", map: "https://g.page/DynamicRyderz?share" },
  { name: "V Gears", city: "Hyderabad", state: "Telangana", address: "LIG 68/4, 4th Phase, KPHB Colony, Kukatpally, Hyderabad, Telangana 500072", phone: "90007 47230", map: "https://goo.gl/maps/wx6JbTgnzQUVKnxF9" },
  { name: "MOTO CENTRAL - BANER", city: "Pune", state: "Maharashtra", address: "Showroom No.1, Siddh Icon, Baner, Pune, Maharashtra 411045", phone: "9822449903", map: "https://maps.app.goo.gl/NWMqgd6KAcMJEqvS7" },
  { name: "MOTO CENTRAL - NANAPETH", city: "Pune", state: "Maharashtra", address: "Navlakha Chambers, 346, Jamlbhai Patel path, New Nana Peth, Ganesh Peth, Pune, Maharashtra 411002", phone: "9822449903", map: "https://maps.app.goo.gl/ReVgyHu6TzrEB5kE8" },
  { name: "Team Driven", city: "Pune", state: "Maharashtra", address: "Sr No 62/2/2/1, behind Ashwamedh Stud Farm, Dalvi Nagar, Pimple Nilakh, Pune, Maharashtra 411027", phone: "9130079988", map: "https://kytindia.com/Link" },
  { name: "Motorsport Gears", city: "Shillong", state: "Meghalaya", address: "Upper, Keating Rd, Secretariat Hills, Shillong, Meghalaya 793001", phone: "9774566328", map: "https://maps.app.goo.gl/iruibSfLQhBfUqPV6" },
  { name: "Moto Armour", city: "Bengaluru", state: "Karnataka", address: "Arya Hub Mall, Hopefarm Circle, NO.12/2,13/1B, ITPL Main Road, Prasanth Extension, Whitefield., Whitefield, Bengaluru, Karnataka 560066", phone: "9342471425", map: "https://maps.app.goo.gl/fR7LQMKQNYfcWzAC8" },
  { name: "India Tyre Company", city: "Ranchi", state: "Jharkhand", address: "G6, SPG MART COMPLE, Bahu Bazar Rd, beside Reliance Fresh, Bahu Bazar, Ranchi, Jharkhand 834001", phone: "9835567670", map: "https://maps.app.goo.gl/MWxeMLFDaqMoMy8L9" },
  { name: "New Scooter House", city: "Chandigarh", state: "Chandigarh", address: "Shop No 201, Sector 48-c, New Motor Market, Industrial Area, Industrial Area, Chandigarh, 160047", phone: "1724627201", map: "https://kytindia.com/Link" },
  { name: "A One Bike Jewels", city: "Tirunelveli", state: "Tamil Nadu", address: "Tukkarammal Puram, 21/7, Trivandrum Rd, Tamil Nadu 627007", phone: "9003331414", map: "https://maps.app.goo.gl/an4tU9Q1RazgxYuj9" },
  { name: "Motor Ranch", city: "Tirunelveli", state: "Tamil Nadu", address: "KTC Nagar, Tirunelveli, Tamil Nadu 627011", phone: "", map: "https://maps.app.goo.gl/PCabzjwe2Nf93qGC7" },
  { name: "Roaman Helmets", city: "Salem", state: "Tamil Nadu", address: "232/115-A Near 4 Roads, Omalur Main Rd, Peramanur, Salem, Tamil Nadu 636007", phone: "9843075605", map: "https://maps.app.goo.gl/wGqUsvA3FSifAXdE6" },
  { name: "Moto Corner", city: "Trichy", state: "Tamil Nadu", address: "TVS Toll Gate, Door No. 1/2 Amarar Jeeva Street ( G Corner, Near Ranchithapuram Bust Stop, Service Rd, Subramaniyapuram, Tiruchirappalli, Tamil Nadu 620020", phone: "", map: "https://maps.app.goo.gl/j4ovPiW6SG69bhJB8" },
  { name: "Moto Corner", city: "Pudukkottai", state: "Tamil Nadu", address: "Charles Nagar, Palace Nagar, Pudukkottai, Tamil Nadu 622003", phone: "9994555920", map: "https://maps.app.goo.gl/YWGyYhS1nB5Tun5o9" },
  { name: "Jijo Helmets", city: "Chennai", state: "Tamil Nadu", address: "1/101, Poonamallee High Rd, Pallavan Nagar, Nerkundram, Chennai, Tamil Nadu 600107", phone: "044 23622273", map: "https://maps.app.goo.gl/UetUQqGUbTnxHJop6" },
  { name: "Sri Jain Auto Centre", city: "Mysuru", state: "Karnataka", address: "Old No. 2928, New No. D-8, Gokulam Main Road, Vani Vilas Mohalla, Mysuru, Karnataka 570002", phone: "8123829231", map: "https://maps.app.goo.gl/JtSwxvMh49ZRQGoM6?g_st=iw" },
  { name: "Spares N Gears", city: "Bengaluru", state: "Karnataka", address: "959, 2nd main road, hosahalli extension, Stage 1, Vijayanagar, Bengaluru, Karnataka 560040", phone: "7349500677", map: "https://maps.app.goo.gl/sF9TR1tr8aoUcLnN7" },
  { name: "Helmetologist", city: "Thrissur", state: "Kerala", address: "Chin-Thom Arcade, Marar Rd, Marar Road Area, Thekkinkadu Maidan, Thrissur, Kerala 680001", phone: "9895370096", map: "https://maps.app.goo.gl/RSQZTVQVyCv1LH727" },
  { name: "MotoDrift HSR", city: "Bengaluru", state: "Karnataka", address: "# 1677, 1st Floor, 22nd Cross, 27th Main, HSR Layout, Sector 2, Bengaluru - 560102", phone: "9035404145", map: "https://kytindia.com/Link" },
  { name: "AND Helmets", city: "Palakkad", state: "Kerala", address: "Palayapet, 23/596(31, opposite Stadium Bypass Road, near Indira Gandhi Stadium, Palakkad, Kerala 678001", phone: "9745774888", map: "https://www.google.com/maps?sca_esv=ad688cdfed731bbc&rlz=1C1CHBF_enIN979IN979&sxsrf=ADLYWIKQIbwbifWH_vxQ19CtaggrdORyFA:1731696048373&gs_lp=Egxnd3Mtd2l6LXNlcnAiDEFORCBIZWxtZXRzICoCCAAyDhAuGIAEGMcBGI4FGK8BMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yHRAuGIAEGMcBGI4FGK8BGJcFGNwEGN4EGOAE2AEBSPspUN4MWOEfcAF4AJABAJgBggGgAeICqgEDMC4zuAEByAEA-AEC-AEBmAIEoAKGA8ICFhAuGIAEGLADGEMYxwEYigUYjgUYrwHCAgkQABiwAxgHGB7CAggQABiABBiiBMICBRAhGKABmAMAiAYBkAYKugYGCAEQARgUkgcDMS4zoAfECw&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KQEK-kzmbag7MdfAWQtZk8xj&daddr=Palayapet,+23/596(31,+opposite+Stadium+Bypass+Road,+near+Indira+Gandhi+Stadium,+Palakkad,+Kerala+678001" },
  { name: "Gear ONN", city: "Kollam", state: "Kerala", address: "GEAR ONN, opp. renault showroom, Kallumthazham, Kollam, Kerala 691004", phone: "8089625020", map: "https://www.google.com/maps?sca_esv=ad688cdfed731bbc&rlz=1C1CHBF_enIN979IN979&sxsrf=ADLYWIJErgM9f629Cb64NbOiy3IfFgMdfw:1731696146334&gs_lp=Egxnd3Mtd2l6LXNlcnAiCEdlYXIgT05OKgIIADILEC4YgAQYxwEYrwEyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFIjhBQAFgAcAB4AJABAJgBiQGgAYkBqgEDMC4xuAEByAEA-AEC-AEBmAICoAKxEJgDALoGBggBEAEYFJIHBzAuMS43LTGgB7YG&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWEScidX_AU7MSbSyh7C5ccZ&daddr=GEAR+ONN,+opp.+renault+showroom,+Kallumthazham,+Kollam,+Kerala+691004" },
  { name: "Helmetologist", city: "Thrissur", state: "Kerala", address: "G696+PHR Chin-Thom Arcade, Marar Rd, Marar Road Area, Thekkinkadu Maidan, Thrissur, Kerala 680001", phone: "9895370096", map: "https://www.google.com/maps/dir/12.8876544,77.5716864/G696%2BPHR+Chin-Thom+Arcade,+Marar+Rd,+Marar+Road+Area,+Thekkinkadu+Maidan,+Thrissur,+Kerala+680001/@11.7162033,75.8532359,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ba7efc3b0f7d349:0xc4dc83e162339c0d!2m2!1d76.2113911!2d10.5193772?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D" },
  { name: "M Roadies", city: "Ahmedabed", state: "Gujarat", address: "G-5, Sarjan Complex 1, Opp Madhur Hall Near Anand Nagar Cross Road, 100 Feet Rd, Ahmedabed Gujarat-380015", phone: "9831691691", map: "https://maps.app.goo.gl/3x6gNukKu66VYqsh7" },
  { name: "Moto Mores", city: "Kolkata", state: "West Bengal", address: "Tetultala, Nazrul Pally, Garia Gardens, Garia, Kolkata, West Bengal 700084", phone: "9804381432", map: "https://www.google.com/maps/dir/Tetultala,+Nazrul+Pally,+Garia+Gardens,+Garia,+Rajpur+Sonarpur,+West+Bengal+700084/@22.4565955,88.3027167,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a0271e7a36ae0af:0x71b78a113f19ceae!2m2!1d88.3850956!2d22.456605?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D" },
  { name: "Pathpavers Pvt Ltd", city: "New Delhi", state: "New Delhi", address: "D-137, OKHLA INDUSTRIAL, Okhla Industrial Phase 1 Road, D-137, New Delhi, South East Delhi,Delhi, 110020", phone: "9891122401", map: "https://kytindia.com/Link" },
  { name: "Piston Crew", city: "Dehradun", state: "Uttarakhand", address: "3/4, Rajpur Rd, adjoining Punjab Resturant, Patel Market, Race Course, Dehradun, Uttarakhand 248001", phone: "8393921921", map: "https://www.google.com/maps?rlz=1C1CHBF_enIN979IN979&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgwIARAjGCcYgAQYigUyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yBggHEEUYPNIBBzUwOWowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KYe1cjFzKQk5MXSB7FQ69GGH&daddr=3/4,+Rajpur+Rd,+adjoining+Punjab+Resturant,+Patel+Market,+Race+Course,+Dehradun,+Uttarakhand+248001" },
  { name: "Scooter Centre", city: "Chandigarh", state: "Chandigarh", address: "34, Sector 21C, Sector 21, Chandigarh, 160022", phone: "9876772324", map: "https://www.google.com/maps/dir/12.8876544,77.5716864/Scooter+Centre,+34,+Sector+21C,+Sector+21,+Chandigarh,+160022/@21.4499849,66.3594789,5z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390fedc134aca3d5:0x85af364b81ba85ec!2m2!1d76.7771589!2d30.7258616?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D" },
  { name: "The Helmet World", city: "Thiruvananthapuram", state: "Kerala", address: "11/637-12, The Helmet World, Nanthancode, Kowdiar Thiruvananthapuram, Kerala- 695003", phone: "9995551234", map: "https://www.google.com/maps/search/?api=1&query=11/637-12,+The+Helmet+World,+Nanthancode,+Kowdiar+Thiruvananthapuram,+Kerala,+695003" },
  { name: "The Thumpers Cafe", city: "Ajit Singh Nagar", state: "Punjab", address: "Plot no 15, Airport Road, Sector 82, Industrial Area, JLPL Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 140308", phone: "8699909999", map: "https://www.google.com/maps/search/?api=1&query=Plot+no+15,+Airport+Road,+Sector+82,+Industrial+Area,+JLPL+Industrial+Area,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140308" },
  { name: "PitStop The Riders Cafe Jammu", city: "Jammu", state: "Jammu and Kashmir", address: "NH 44, Road, Sidhra, Jammu, Jammu and Kashmir 180019", phone: "6005776011", map: "https://g.co/kgs/kwXTAjW" },
  { name: "Autonity", city: "Bengaluru", state: "Karnataka", address: "XH5J+8P2, 1st Main Rd, Kalasipalyam New Extension, Kalasipalya, Bengaluru, Karnataka 560002", phone: "8150880880", map: "https://g.co/kgs/aKtGonB" },
  { name: "Helmet Point", city: "Jaipur", state: "Rajasthan", address: "B 11 MURTIKALA COLONY, Gopalpura Bypass Rd, Jaipur, Rajasthan 302018", phone: "9413334077", map: "https://g.co/kgs/G9iFRnR" },
  { name: "Roaring Toyz Superbike Pvt Ltd", city: "Mumbai", state: "Maharashtra", address: "Shop no. 6A, Gagangiri Complex, New Link Rd, Shiva Shakti Nagar, Kandarpada, Dahisar West, Mumbai, Maharashtra 400068", phone: "9967863881", map: "https://maps.app.goo.gl/SNUCXJs8uhV8DBVYA" },
  { name: "Big Bikers Hub", city: "Bengaluru", state: "Karnataka", address: "No.3467, Tulasi Sadan, 80feet road,4th main, 4th phase, (VBHCS, Girinagar Rd, Hosakerehalli Layout, Banashankari 3rd Stage, Banashankari, Bengaluru, Karnataka 560085", phone: "9741149229", map: "https://maps.app.goo.gl/otJhWj78LwuADU8JA" },
  { name: "RIDEMATES", city: "Bengaluru", state: "Karnataka", address: "Ridemates 1st Floor opp to Express car care & Apollo Pharmacy 25/26 Papamma Shamamma complex 80 Feet Road, Gubbalala Main Rd, off Kanakapura Main Road, Bengaluru, Karnataka 560062", phone: "7625088567", map: "https://g.co/kgs/SMrvtk4" },
  { name: "Xtorqz", city: "Bengaluru", state: "Karnataka", address: "1 80feetroad, 14th Cross Rd, opp. Apollo Pharmacy, 2nd Block, Chandra Layout, Maruthi Nagar, Chandra Layout, Bengaluru, Karnataka 560072", phone: "89518 80112", map: "https://maps.app.goo.gl/9kX7ykfwv1jiepLr5" },
  { name: "Motozag Pitstop", city: "Palakad", state: "Kerala", address: "20/641-1,2 CBE Road Near Stadium Stand, Palakad Kerala 678001", phone: "8921157943", map: "https://maps.app.goo.gl/PDz9XMGsPzWLcd568" },
  { name: "Always Riding", city: "Gurugram", state: "Haryana", address: "PLOT NO-174,, MAIN SOHNA ROAD, NEAR SAMVIT HOSPITAL OPP. SHIV MANDIR, VILLAGE ISLAMPUR, GURUGRAM, HARYANA 122001", phone: "9729007948", map: "https://maps.app.goo.gl/F7o4kNREMymRMfmj6" },
  { name: "Zara Helmets", city: "Tirupur", state: "Tamil Nadu", address: "NO:679,7 STAR STREET, OPP ROAD METTUPALAYAM BUS STOP, TIRUPUR-641602", phone: "7708999128", map: "https://maps.app.goo.gl/4aa2YZ3MhPnGyjxK8" },
  { name: "AK Bikers Planet", city: "Trichy", state: "Tamil Nadu", address: "123 BHARATHIYAR ST SUBRAMANIYAPURAM TVS TOLLGATE TRICHY-620020", phone: "7010325071", map: "https://maps.app.goo.gl/BMLU4QovPJSniLbQ9" },
  { name: "Bike Gallery", city: "Pollachi", state: "Tamil Nadu", address: "41, VENKATESA COLONY, MAHALINGAPURAM, POLLACHI, PIN-642001", phone: "9842992289", map: "https://maps.app.goo.gl/SvjRR24vKm7zZBYs6" },
  { name: "Bikerz Module", city: "Chennai", state: "Tamil Nadu", address: "OLD NO 256, NEW NO 296, 26, ARCOT RD, NEAR MERCY ELECTRONICS, VADAPALANI, CHENNAI-600026", phone: "9790014284", map: "https://maps.app.goo.gl/Gxts5CUkLr6LWfZu9" },
  { name: "District 38", city: "Trichy", state: "Tamil Nadu", address: "KINGS SQUARE, COMPLES SHOP NO-9A,11 CROSS ROAD THILLAINAGAR, TRICHY-620018", phone: "9945403838", map: "https://maps.app.goo.gl/MXMNAapCGScgdUbeA" },
  { name: "Motorista", city: "Coimbatore", state: "Tamil Nadu", address: "205, CHINNASWAMY ROAD, SIDHAPUDUR, GP SIGNAL, COIMBATORE – 641044", phone: "9994999690", map: "https://kytindia.com/Link" },
  { name: "Motogear Performance", city: "Chennai", state: "Tamil Nadu", address: "HAMID BUILDING 190-192, ANNA SALAI, EXPRESS ESTATE, THOUSAND LIGHTS, CHENNAI 600006", phone: "9952033784", map: "https://maps.app.goo.gl/LnyCXDgL2CQ48Qyt5" },
  { name: "Auto Sales Pitstop", city: "Mapusa", state: "Goa", address: "Wagle Building, near Joáo Menezes Pharmacy, Mapusa, Goa 403507", phone: "9822156166", map: "https://maps.app.goo.gl/n1enuSmXHuqAhXBF9?g_st=iwb" },
  { name: "MODERN HAT WORKS", city: "Hyderabad", state: "Telangana", address: "Abids Road Opposit indian oil petrol pump, Koti, Hyderabad, Telangana 500001", phone: "9849737672", map: "https://maps.app.goo.gl/VwHrZk4pziQAAAVdA" },
  { name: "Kapadia & Co", city: "Belagavi", state: "Karnataka", address: "2854, Khade Bazaar, Khade Bazar, Raviwar Peth, Belagavi, Karnataka 590001", phone: "9448094770", map: "https://maps.app.goo.gl/d1RW9zs5dGmV4LCN7" },
  { name: "H K Helmet Sales", city: "Raia", state: "Goa", address: "295/A/SH1 ward no IV Tembim comrolim, Raia, Goa 403720", phone: "9730118168", map: "https://maps.app.goo.gl/QjKF9BzNPfSS98Lh6" },
  { name: "1 Down 5 UP", city: "Hyderabad", state: "Telangana", address: "1-100/LE/15 Aliens Valley Diamond Heights Layout Gopanapalle, Nallagandla, Hyderabad, Telangana 500046", phone: "7337566646", map: "https://g.co/kgs/tU1Mxie" },
  { name: "Right Track", city: "Goa", state: "Goa", address: "Pequeno Morod, 2/154 A, Chogm Rd, Muddavaddi, Saligao, Goa 403511", phone: "8149672129", map: "https://maps.app.goo.gl/KLg1eHfnE5W5fxMh6?g_st=awb" },
  { name: "Gupta Biking Gears", city: "Ghaziabad", state: "Uttar Pradesh", address: "58 Satyam enclave Main GT Road Sahibabad Ghaziabad 201005", phone: "9319159289", map: "https://kytindia.com/Link" },
  { name: "Bikerz Supermart", city: "Faridabad", state: "Haryana", address: "59, 60, Neelam Bata Rd, New Industrial Township, Faridabad, Haryana 121001", phone: "9319159289", map: "https://kytindia.com/Link" },
  { name: "Gear N Ride", city: "Bengaluru", state: "Karnataka", address: "32/1/1, 1st Floor, FPM Towers, Above Silver Jewellery showroom 9th Main, 14th Cross Rd, opposite empire hotel, 6th Sector, HSR Layout, Bengaluru, Karnataka 560102", phone: "78924 38040", map: "https://maps.app.goo.gl/hQiTtfJ18P67TbFbA" },
  { name: "HRZ Pitstop", city: "Mysuru", state: "Karnataka", address: "3, Vishwamanava Double Road, Saraswathipuram, Mysuru, Karnataka 570009", phone: "88846 88152", map: "https://maps.app.goo.gl/6oLNMzaQLqt7p1688" },
  { name: "MAD BIKERS", city: "Bhubaneswar", state: "Odisha", address: "Plot No 494, Nicco Park Road, Madhusudhan Nagar, above Madbiker Garage, Nayapalli, Bhubaneswar, Odisha 751010", phone: "7008680214", map: "https://maps.app.goo.gl/VJt5S1kSeuj2NqD38" },
  { name: "RACE DYNAMICS", city: "Lucknow", state: "Uttar Pradesh", address: "Shop No 529 D Kalyanpur, Tedhi Pulia Ring Rd, near Shukla Marbal Granite, Kalyanpur, Lucknow, Uttar Pradesh 226022", phone: "9889668858", map: "https://maps.app.goo.gl/zvCrgUfnQiCheafk7" },
  { name: "Bikeaholic", city: "Noida", state: "Uttar Pradesh", address: "Khasra no 217, Plot no B5, Bhangel, Hazipur, Sector 104, Begampur, Noida, Uttar Pradesh 201304", phone: "9818789422", map: "https://kytindia.com/Link" },
  { name: "CR DECALS", city: "Siliguri", state: "West Bengal", address: "Ground floor, Sevoke Road Opposite BAJAJ/KTM Showroom Darshan Plaza, Siliguri, West Bengal 734001", phone: "9907997005", map: "https://kytindia.com/Link" },
  { name: "DARPAN AUTOMOBILES", city: "Nagaon", state: "Assam", address: "Amtol Path, near A.T.Road, Dimoruguri, Nagaon, Assam 782003", phone: "8486576885", map: "https://kytindia.com/Link" },
  { name: "RIDE READY (MS BIKING)", city: "Nagpur", state: "Maharashtra", address: "PLOT NO 198, DHADIWAL LAYOUT, beside RANJANA CELEBRATIONS, Ring Road, Joginagar, Nagpur, Maharashtra 440027", phone: "9503333193", map: "https://kytindia.com/Link" },
  { name: "RED ASH", city: "Gadhinglaj", state: "Maharashtra", address: "Sankeshwar road Opposite kotekar bhojnale, Gadhinglaj, Maharashtra 416502", phone: "7620836364", map: "https://kytindia.com/Link" },
  { name: "RIDE N RIDER", city: "Dombivli", state: "Maharashtra", address: "Kalyan - Shilphata Rd, Mothi Desai Gaon, Dombivli, Khidkali, Maharashtra 421204", phone: "7504337999", map: "https://kytindia.com/Link" },
  { name: "BIKERS WORLD", city: "Kolhapur", state: "Maharashtra", address: "E Ward, Plot no.5, Rajendra Nagar Rd, Rajendra Nagar, Kolhapur, Maharashtra 416003", phone: "8055497122", map: "https://kytindia.com/Link" },
  { name: "TEHALIAS AUTO", city: "Pune", state: "Maharashtra", address: "Shop No.7, LIC Building, Station Rd, near SHAKTI SPORTS, MIDC, Pimpri Colony, Pune, Pimpri-Chinchwad, Maharashtra 411018", phone: "9823244888", map: "https://maps.app.goo.gl/NC1RYF2bdR479Ss69" },
  { name: "OPEN ROAD", city: "Pune", state: "Maharashtra", address: "UG-28, East Court Building, opp. Phoenix Mall North Gate, Clover Park, Viman Nagar, Pune, Maharashtra 411014", phone: "9322627403", map: "https://maps.app.goo.gl/gmspHhhWbZFFcLQV8" },
  { name: "MONKS ON MACHINE", city: "Vapi", state: "Gujarat", address: "Shop no D-5, M Cube, Taluka Seva Sadan, NH 08, near Bombay Restaurant, opp. Vapi, Vapi, Gujarat 396195", phone: "7878768874", map: "https://maps.app.goo.gl/w4N8rN6Cqi4Ty9AQA" },
  { name: "BIKERS TROOPER", city: "Mumbai", state: "Maharashtra", address: "Shop No. 1, Akbar Manzil, Old Cadel Rd, next to Cadel Castle Society, The Mahim Makarand CHS, Mahim West, Mahim, Mumbai, Maharashtra 400016", phone: "7738818535", map: "https://maps.app.goo.gl/U2WnfYVET7majdGq9" },
  { name: "PROJECT REVOLT (Lazy Ass Bikers)", city: "Mumbai", state: "Maharashtra", address: "G-G&F, Nahar & Seth Indl. Est, Gala, Cardinal Gracious Rd, Chakala, Andheri East, Mumbai, Maharashtra 400047", phone: "9326929569", map: "https://maps.app.goo.gl/Tgg3wLbSVxXwWkjn9" },
  { name: "BAHADURS GARAAJ (BIKER STORE - 1)", city: "Bilaspur", state: "Chhattisgarh", address: "INFRONT OF OLD RTO OFFICE, BESIDE RATAN PLAZA, VYAPAR VIHAR, Bilaspur, Chhattisgarh", phone: "7000087803", map: "https://maps.app.goo.gl/Sz7Uvp3qZoS5xRwq9" },
  { name: "BAHADURS GARAAJ", city: "Raipur", state: "Chhattisgarh", address: "Ring road no-1 infront of sbi state bank beside Agriconic or tiles shop. Near indian coffee house, kushalpur, Raipur - 492001", phone: "7000087803", map: "https://maps.app.goo.gl/SFMXsKXFjcDztytj8" },
  { name: "FIFTH GEARS", city: "Mumbai", state: "Maharashtra", address: "Dawarka Adrino, shop no.05, near D.Y. Patil Medical College, Kasaba Bawada, Kolhapur, Maharashtra 416006", phone: "9762869110", map: "https://maps.app.goo.gl/3f4ABRXY4F4CW4oG9" },
  { name: "RIDERS JUNCTION", city: "Indore", state: "Madhya Pradesh", address: "UG 4, Vikram Urbane, AB Rd, behind Sayaji Hotel, Scheme 54 PU4, Indore, Madhya Pradesh 452010", phone: "7697258886", map: "https://maps.app.goo.gl/8SZUWYbdPHNwMntGA" },
  { name: "RS 46 BIKERS (DADAR)", city: "Mumbai", state: "Maharashtra", address: "Mahavir Sukh, Dr Babasaheb Ambedkar Marg, Shindewari, Radhika Saikripa Co-op Society, Dadar East, Dadar, Mumbai, Maharashtra 400014", phone: "8169309638", map: "https://maps.app.goo.gl/esh9Vhaiua8nVvZ56" },
  { name: "ARIHANT AUTO", city: "Mumbai", state: "Maharashtra", address: "Rustomjee Co-Operative Housing Society (SRA), Western Express Highway Services Road, Andheri East, 15/B, Service Rd, Mumbai, Maharashtra 400093", phone: "70307 62419", map: "https://maps.app.goo.gl/pGmeucrovA67fjZo8" },
  { name: "Banadurga Kinetic World", city: "KHORDA", state: "Odisha", address: "457/1952, NEAR PATIA SQUARE,INFOCITY ROAD, CHANDRASHEKAR PUR,KHORDA, ODISHA, 751024", phone: "9861725083", map: "https://maps.app.goo.gl/f8hqV59CfkTtW1zZ9" },
  { name: "Bikerzz", city: "Kolkata", state: "West Bengal", address: "174, Acharya Prafulla Chandra Rd, Hati Bagan, Shyam Bazar, Kolkata, West Bengal 700004", phone: "9748850569", map: "https://maps.app.goo.gl/fee6bwa24aCHLkHr6" },
  { name: "Bikers Cave", city: "Kanakpur", state: "Assam", address: "174, AchHailakandi Rd, near ICICI Bank, Rangirkhari, Kanakpur, Kanakpur Part-II, Assam 788005", phone: "6002042108", map: "https://kytindia.com/Link" },
  { name: "Performance Gear", city: "KOLKATA", state: "West Bengal", address: "222,AJC BOSE ROAD BECK BAGAN NEAR KAWASAKI SHOWROOM, KOLKATA, WEST BENGAL, 700017", phone: "9007074742", map: "https://maps.app.goo.gl/92oZymxxnCvy4VoZA" },
  { name: "Pedal Shifters", city: "Kalimpong", state: "West Bengal", address: "10th mile, sdb giri road, near traffic police, station, Chotta Bhalukhop, Kalimpong, West Bengal, 734301", phone: "9635964700", map: "https://maps.app.goo.gl/h7KzXAUdjbnoK6P36" },
  { name: "THE RIDERS SHED", city: "PATHANAMTHITTA", state: "Kerala", address: "6/270A, pathanamthitta kaipatoor road, shutter junction, PATHANAMTHITTA, KERALA, 689645", phone: "7025308896", map: "https://maps.app.goo.gl/aV55prYxuLfPDyjz5" },
  { name: "RYDEN", city: "Asansol", state: "West Bengal", address: "BB College Arts Building, 185, G.T. Road, East, More, Ushagram, Asansol, West Bengal, 713303", phone: "9239227272", map: "https://maps.app.goo.gl/1RqttbKmR9DkFP72A" },
  { name: "Gear Up", city: "Kolkata", state: "West Bengal", address: "22A, Dr Rajendra Rd, Jadubabur Bazar, Bhowanipore, Kolkata, West Bengal 700020", phone: "9903837859", map: "https://maps.app.goo.gl/84PuZ1xz61K3Jvvs8" },
  { name: "Star Media", city: "Jorhat", state: "Assam", address: "Assam Trunk Rd, Choladhara, Jorhat, Bhatemora Gaon, Assam 785001", phone: "8486930362", map: "https://maps.app.goo.gl/g9Khy5dSSxGc2Bx27" },
  { name: "MOTO GEARS", city: "THIRUVANTHAPURAM", state: "Kerala", address: "14/772, PEECEEYEN SHOPING COMPLEX, NEAR GANDHI PARK, PARASSALA, THIRUVANTHAPURAM, KERALA, 695502", phone: "7736688668", map: "https://kytindia.com/Link" },
  { name: "Bikers Heaven", city: "Vijayawada", state: "Andhra Pradesh", address: "1st Floor, #52-1/1-3, Vasavi Arcade, Vinayak Theatre Road, Beside HDFC Bank, Veterinary Colony, Vijayawada, NTR District, Andhra Pradesh, 520008", phone: "8054359999", map: "https://maps.app.goo.gl/2JbcoCmy1gF9g1Vp9" },
  { name: "THE STREET FLAMESS", city: "Hyderabad", state: "Telangana", address: "H No. 2-3-135, block no 4, opp tarbund hanuman temple, tarbund, secunderbad, Hyderabad", phone: "9908786000", map: "https://maps.app.goo.gl/1LV8oP8bHBi6dYTA8" },
  { name: "BIKERS STUDIO", city: "Krishna", state: "Andhra Pradesh", address: "101 ground floor sri Ranga heights kaleshwar Rao road governorpet Vijayawada, Krishna, Andhra Pradesh, 520002", phone: "8985901389", map: "https://maps.app.goo.gl/xJqaBcnhm9weBZk37?g_st=ac" },
  { name: "TeamSKYDD", city: "Mysore", state: "Karnataka", address: "P575 Ahimsa Marga Sidhartha layout, Mysore, Karnataka-570011", phone: "8904219709", map: "https://maps.app.goo.gl/Utn7EsZP56mQsp7y8" },
  { name: "Motorizzr", city: "Bengaluru", state: "Karnataka", address: "No. 165, Ground Floor, 2nd Cross, 2nd Main, 4th Phase, Yelahanka New Town, Bengaluru -560064", phone: "9380459470", map: "https://maps.app.goo.gl/4JjamadUbQfAxx3R9?g_st=ic" },
  { name: "Motorizzr", city: "Bengaluru", state: "Karnataka", address: "No. 254/185/26, Ground Floor, Baswer Sannidhi, Neeladri Layout, 2nd Main, Doddathoguru Road, Electronic City, Bengaluru 560100", phone: "7899139659", map: "https://maps.app.goo.gl/3W8mvGhX8JLSF3Pn9?g_st=ic" },
  { name: "Bikerz Cafe", city: "Mangaluru", state: "Karnataka", address: "Emjay's Complex, Balmatta Road, Balmatta, Mangalore - 575002", phone: "9538898988", map: "https://maps.app.goo.gl/fR8QnGJDjbFsxPpR8?g_st=ipc" },
  { name: "THE HELMET STUDIO", city: "Hyderabad", state: "Telangana", address: "Opp Delhi public school khajaguda Gachibowli, Hyderabad, Telangana", phone: "9398748177", map: "https://maps.app.goo.gl/GRKRRDVL67TJNLp58" },
  { name: "Bikeywear Riding Gears", city: "Punjab", state: "Punjab", address: "SCO-36GF, New Sunny Enclave, Sec 125, Greater Mohali, 140301, Punjab Landmark; Backside Gopal Sweets Market", phone: "9317535662", map: "https://maps.app.goo.gl/cUKj55LQv24xoFsM8" },
  { name: "GUPTA TRADING CO", city: "Kolkata", state: "West Bengal", address: "33/1A, S N Banerjee Road, Dharmatolla, Kolkata, West Bengal 700013 India", phone: "6290525587", map: "https://maps.app.goo.gl/gnRFBnszAXGVmXa8A" },
  { name: "MotoVaultGears", city: "Kolkata", state: "West Bengal", address: "28B Bakultala Lane, P.s - Kasba, Kolkata 700042 West Bengal", phone: "9051465014", map: "https://maps.app.goo.gl/Sii2P9LQVZoPcQaP7" },
  { name: "Prime Auto Sales", city: "Margao", state: "Goa", address: "Shop no. 1,2,3 and 4 Imperial Height, Arlem junction, Fatorda, Margao - Goa", phone: "80073 85271", map: "https://maps.app.goo.gl/TNFhxoSsA6vvswgTA" },
  { name: "Moto Performance Store", city: "Bengaluru", state: "Karnataka", address: "39/2, KR road, banashankari 2nd stage. Bengaluru -560070", phone: "9845472720", map: "https://kytindia.com/Link" },
  { name: "MOTOEDGE GEAR", city: "Bengaluru", state: "Karnataka", address: "No.65,Khata No.49/2, Near BlueDart Courier Godown, Maheswaramma Temple Main Road, Mahadevapura, Bangalore - 560048", phone: "8106893929", map: "https://maps.app.goo.gl/3Wotz4KxkTF1Tugq9" },
  { name: "Shaw Auto Services", city: "Kajora", state: "West Bengal", address: "Andal more, NH 19, opposite side of Gokul dham, west bengal 713321", phone: "8945045551", map: "https://kytindia.com/Link" },
  { name: "Krazy House Garage", city: "Singtam", state: "Sikkim", address: "Shanti Nagar, Shanti Nagar, New Singtam Bridge, Singtam Sikkim 737134 India", phone: "7908161183", map: "https://maps.app.goo.gl/P2VZ9jximCzuh9k26" },
  { name: "SHREE KRISHNA HELMET HOUSE", city: "Thane", state: "Maharashtra", address: "3, Petrol Pump, Shop No. 6, Ajit Darshan, Old Agra Road, near Red Cross Bhavan, next to National Punjab Hotel, Thane, Maharashtra 400602", phone: "7506667272", map: "https://maps.app.goo.gl/Mz1Q54fUDZy3rHWc6" },
  { name: "BRC CUSTOMS", city: "Bhopal", state: "Madhya Pradesh", address: "27, Karbala Rd, Shaheed Nagar, Sajida Nagar, Bhopal, Madhya Pradesh 462001", phone: "8269214232", map: "https://maps.app.goo.gl/4s5YAHNizxzEEGjx8" },
  { name: "RIDE N TREK", city: "Nashik", state: "Maharashtra", address: "Shop No. 3, Kamod Complex, Back side of Shatabdi Hospital, Mumbai Naka, Renuka Nagar, Nashik, Maharashtra 422001", phone: "7038119999", map: "https://maps.app.goo.gl/4uQTxEtcUYfvFcpE8" },
  { name: "CLUTCH & GEAR", city: "Pune", state: "Maharashtra", address: "Pushpa Complex, near Bank of Maharashtra, Vasant Baug, Kanchanganga Society, Chowk, Bibwewadi, Pune, Maharashtra 411037", phone: "8928348348", map: "https://maps.app.goo.gl/gSQC6m498Q5LkM7B7" },
  { name: "HELMET HUB (Genuine Auto Parts)", city: "Jodhpur", state: "Rajasthan", address: "Jalori Gate Circle, Jalori Bari, Sardarpura, Jodhpur, Rajasthan 342001", phone: "9829402359", map: "https://maps.app.goo.gl/vtWdKx2xLUrRxURt5" },
  { name: "HELMET RACING", city: "Udaipur", state: "Rajasthan", address: "Helmet Racing, 100 Feet Rd, near aura hotel, opp. Honey dal bati, Mali Colony, Azad Nagar, Central Area, Udaipur, Rajasthan 313002", phone: "9664423319", map: "https://maps.app.goo.gl/mM4bFUnpXaAkJ2AZ6" },
  { name: "RAJDHANI AUTO PARTS", city: "Karad", state: "Maharashtra", address: "Near vadilal ply, behind UCO bank, Mangalwar Peth Karad, Karad, Maharashtra 415110", phone: "9112727170", map: "https://maps.app.goo.gl/xMUPkoN7msumjcXk7" },
  { name: "S9 HELMETS & ACCESSORIES", city: "Mumbai", state: "Maharashtra", address: "Shop no 266/2113 motilal nagar no 1 Link Road opposite carnival cinema, Goregaon West, Mumbai, Maharashtra 400104", phone: "9869975711", map: "https://maps.app.goo.gl/HfKbZgMhK884XECn9" },
  { name: "THE RIDERS DEN", city: "Pune", state: "Maharashtra", address: "Shop no. G-09, Sun Shree Woods Commercial Complex, NIBM Rd, Pune, Maharashtra 411048", phone: "92843 66649", map: "https://maps.app.goo.gl/yCZ9DeDrgKzJdbbX6" },
  { name: "MD Helmets", city: "Hassan", state: "Karnataka", address: "Hoslain road Hassan Karnataka 573201", phone: "80500 17052", map: "https://maps.app.goo.gl/XRYsq3EzQyGNH7UN8" },
  { name: "PRIMEMOTO SPARES", city: "Dibrugarh", state: "Assam", address: "B3, Super Market, Jhalukpara Road, Dibrugarh 786001 Assam", phone: "6001799717", map: "https://maps.app.goo.gl/rDZ5vAqSE5ztMgHh8" },
  { name: "Bikerdroid", city: "Guwahati", state: "Assam", address: "W.N.-25, BARBARI, V.I.P. ROAD, GUWAHATI, Kamrup Metropolitan, Assam, 781036", phone: "70990 20855", map: "https://maps.app.goo.gl/a1gZnFea6DrzK8Vm6" },
  { name: "Becane riderz", city: "Panihati", state: "West Bengal", address: "332/1, opposite Panihati College, Anandalok, H B Town, Sodepur, Kolkata, Panihati, West Bengal 700110", phone: "9088028017", map: "https://maps.app.goo.gl/zsk7CxAAKNz84Whc8" },
  { name: "Riding Gears Helmets", city: "Bengaluru", state: "Karnataka", address: "1866/B, Service Rd, 5th Block, 1st Stage, HRBR Layout, HBR Layout, Bengaluru, Karnataka 560043", phone: "9916367861", map: "https://maps.app.goo.gl/Ngufvu39uCF6CmJz9" },
  { name: "Galaxy Helmets", city: "Bengaluru", state: "Karnataka", address: "4th Main Rd, HAL 3rd Stage, Puttappa layout, New Tippasandra, Bengaluru, Karnataka 560075", phone: "9886058686", map: "https://maps.app.goo.gl/gHEJjhzJ2Mt2THiH8" },
  { name: "H.O.M Lalbagh", city: "Bengaluru", state: "Karnataka", address: "84, opposite MTR Restaurant, Doddamavalli, Sudhama Nagar, Bengaluru, Karnataka 560002", phone: "90362 54536", map: "https://maps.app.goo.gl/yCtvFTQB9DwWed1X7" },
  { name: "H.O.M North", city: "Bengaluru", state: "Karnataka", address: "M29, Bellary Rd, next to Triumph North, Dena Bank Colony, Ganganagar, Bengaluru, Karnataka 560032", phone: "90362 54537", map: "https://maps.app.goo.gl/gswoi4ZdJbTWJdyBA" },
  { name: "GEARS CHENNAI", city: "Chennai", state: "Tamil Nadu", address: "7A, VELACHERY LINK ROAD, Bharathi Nagar, Tharamani, Chennai, Tamil Nadu 600113", phone: "9087669922", map: "https://maps.app.goo.gl/yU55Cqk4ieQdy5S56" },
  { name: "GEARS CHENNAI", city: "Chennai", state: "Tamil Nadu", address: "8, JAWAHARLAL NEHRU ROAD, AMBAL NAGAR, EKKATUTHANGAL (NEAR EKKATUTHANGAL METRO), CHENNAI 600032", phone: "6384669922", map: "https://maps.app.goo.gl/N2Vcx9iUN3amxrRTA" },
  { name: "GEARS CHENNAI", city: "Chennai", state: "Tamil Nadu", address: "82, FIRST FLOOR, MTH ROAD, (NEAR SHELL PETROL BUNK), MANNURPET, PADI, CHENNAI 600050", phone: "7871669922", map: "https://maps.app.goo.gl/F3EjCQdpBowMPnVN9" },
  { name: "GEARS CHENNAI", city: "Chennai", state: "Tamil Nadu", address: "139/303, RK MUTT ROAD, MANDAVELI, (SATHYA STUDIO JUNCTION) CHENNAI 600028", phone: "9087669922", map: "https://maps.app.goo.gl/U9tnTctdeTxaBmPe7" },
  { name: "Bike Experts", city: "Puducherry", state: "Puducherry", address: "240, Thiruvalluvar Salai, opp. to Shanmuga Cinemas, Kuyavarpalayam, Puducherry, 605013", phone: "9807034444", map: "https://maps.app.goo.gl/wL1Enxgo3XCr6WRd6" },
  { name: "MOTO NEXUS", city: "Tirupathur", state: "Tamil Nadu", address: "35,36, Sacred Heart College Complex, VANIYAMBADI MAIN ROAD, Tirupathur, Tamil Nadu 635601", phone: "8870299234", map: "https://maps.app.goo.gl/MxvfRUkLGHL9NMdTA" },
  { name: "Grid Gear Up", city: "Bengaluru", state: "Karnataka", address: "No 5, MD Complex, K Narayanapura Main Rd, opp. Govt, Hospital, Hennur, Bengaluru, Karnataka 560077", phone: "9986070154", map: "https://maps.app.goo.gl/Jm7RzPNWnayXd5Ud6" },
  { name: "Moto union Banaswadi", city: "Bengaluru", state: "Karnataka", address: "Shop no 653 100feet road dodda Banaswadi kalayan nagar, Bengaluru, Karnataka 560043", phone: "6364326600", map: "https://maps.app.goo.gl/tvHXxnhhumoCfr4w9" },
  { name: "Motorizzr", city: "Bengaluru", state: "Karnataka", address: "k n extension Triveni road City:, Yeshwanthpur Bengaluru Karnataka 560022", phone: "7338555141", map: "https://maps.app.goo.gl/WtwBHZTF8eTvmMUo9" },
  { name: "THROTTLE CULTURE", city: "Bengaluru", state: "Karnataka", address: "Ground floor No 35/1, KNo 12 Geetana orchid, Spice Garden, Marathahalli main road Bengaluru 560037", phone: "9972779483", map: "https://maps.app.goo.gl/jeXuYUog9auzfiJP6" },
  { name: "MT Store by Bikersports", city: "Bengaluru", state: "Karnataka", address: "Ground Floor, building 1367, Aditya Towers, C cross East end, Jayanagar 9th block, JP Nagar, 560041 Bengaluru", phone: "9182759973", map: "https://kytindia.com/Link" },
  { name: "Road House Rider", city: "Hyderabad", state: "Telangana", address: "Shop No 4, Paigah Apartments, Metro Pillar Number C1292 / PRP18, Sardar Patel Rd, opposite Viman Nagar Road, Hyderabad, Telangana 500016", phone: "9381486160", map: "https://maps.app.goo.gl/K2gWG3ie8CeWCT669" },
  { name: "Spares N Gears", city: "Bengaluru", state: "Karnataka", address: "Ground Floor NO 959 2nd Mn Rd 4th Cross Road Hosahalli Extension, Stage 1, Bengaluru 560040", phone: "7349500677", map: "https://maps.app.goo.gl/Sk5BZf9zuSZ2LGQy7" },
  { name: "Helmet Hub", city: "Hyderabad", state: "Telangana", address: "Sri Shyam Nagar, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032", phone: "7349500677", map: "https://maps.app.goo.gl/BLwGfUQkWVyKLiUPA" },
  { name: "PRO BIKES MANDYA", city: "Mandya", state: "Karnataka", address: "Ashok Nagar 5th cross mandya Mandya Mandya Karnataka 571401", phone: "8105646141", map: "https://maps.app.goo.gl/4re6Lc7JQzYMPzh36" },
  { name: "SHYAM AUTO ACCESSORIES", city: "PATNA", state: "Bihar", address: "RK BHATTACHARYA MOR MARKET RAJENDRA PATH PATNA 800001", phone: "9386377887", map: "https://maps.app.goo.gl/GU55izwodSn7Em5G7" },
  { name: "RAJEEV RIDERS", city: "NOIDA", state: "Uttar Pradesh", address: "N-193, SECTOR 12, NOIDA, UTTAR PRADESH, 201301", phone: "7827402576", map: "https://maps.app.goo.gl/ypGWKcs54Xuv5pHu5" },
  { name: "AUTO MOD", city: "SRINAGAR", state: "Jammu and Kashmir", address: "Shaheed Gunj karan nagar near shaheed Gunj police station, SRINAGAR, JAMMU & KASHMIR 190010", phone: "7006797987", map: "https://kytindia.com/Link" },
  { name: "Commute Automobiles", city: "SRINAGAR", state: "Jammu and Kashmir", address: "Parimpora Bypass, opposite Toyota Showroom, near Yaqoob Steel Sales, Qamarwari, Srinagar, Jammu and Kashmir 190017", phone: "9596559100", map: "https://kytindia.com/Link" },
  { name: "RIDE BY WIRE", city: "Secunderabad", state: "Telangana", address: "12-13-393, Street no-1, Lane, 4, Tarnaka, Secunderabad, Hyderabad, Telangana 500017", phone: "9992228554", map: "https://maps.app.goo.gl/XTnY4XhfDvHAM4i5A" },
  { name: "REVVNATION AUTOMOTIVE", city: "Udupi", state: "Karnataka", address: "Old Post Office Rd, near Mitra Hospital, Thenkpete, Maruthi Veethika, Udupi, Karnataka 576101", phone: "9019822563", map: "https://maps.app.goo.gl/8ixCotA1UF32sM7M6" },
  { name: "RAINBOW PRO GEAR", city: "Chennai", state: "Tamil Nadu", address: "#641, ANNA SALAI, THOUSAND LIGHT, CHENNAI - 600006", phone: "9940395200", map: "https://kytindia.com/Link" },
  { name: "Lucky Enterprises", city: "Bengaluru", state: "Karnataka", address: "182/B 100ft ring road Address, Peenya 3rd Stage Bangalore 560058 Bangalore Karnataka, 560058", phone: "9844861373", map: "https://maps.app.goo.gl/VzbqF15N8m7g8x5k8" },
  { name: "SRI SHANKAR ENTERPRISES", city: "Bengaluru", state: "Karnataka", address: "NO 12, GMK COMPLEX 80 FEET ROAD, PAPAREDDY PALYA, 2ND STAGE NAGARBHAVI BANGALORE BANGALORE KARNATAKA 560072", phone: "9448472776", map: "https://maps.app.goo.gl/S7i9K9T6p4k4quaQ7" },
  { name: "Flying Eagle Motorcycle Hub", city: "THIRUVANTHAPURAM", state: "Kerala", address: "Venpalavattom P.O, Oruvathilkotta, Anayara, Thiruvananthapuram, Kerala 695029", phone: "7594940775", map: "https://maps.app.goo.gl/9XJKJCrDruyU9Fr89" }
];
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();

    const brandTabs = document.querySelectorAll('.brand-tab');
    const brandPanels = document.querySelectorAll('.brand-panel');
    const stateFilter = document.getElementById('stateFilter');

    function populateStateOptions() {
        if (!stateFilter) return;

        const states = new Set();
        document.querySelectorAll('.dealer-card[data-state]').forEach(card => {
            const state = card.dataset.state;
            if (state) states.add(state);
        });

        [...states].sort().forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateFilter.appendChild(option);
        });
    }

    function renderKytDealers() {
      const grid = document.getElementById('kyt-dealer-grid');
      if (!grid) return;

      grid.innerHTML = '';

      if (!kytDealers.length) {
        grid.innerHTML = `
          <div class="coming-soon-box">
            <div class="coming-soon-icon">🚧</div>
            <h3>KYT Dealers Coming Soon</h3>
            <p>Our KYT dealer list is currently being finalized. Please check back soon for authorized KYT partners in your state.</p>
            <div class="coming-soon-states">
              <span>All India</span>
              <span>State-wise listings</span>
              <span>Authorized partners</span>
            </div>
          </div>
        `;
        return;
      }

      kytDealers.forEach(dealer => {
        const article = document.createElement('article');
        article.className = 'dealer-card';
        article.dataset.state = dealer.state;

        article.innerHTML = `
          <div class="dealer-badges"><span class="brand-tag kyt">KYT</span></div>
          <h3>${dealer.name}</h3>
          <p class="dealer-city">${dealer.city}</p>
          <p class="dealer-address">${dealer.address}</p>
          <div class="dealer-actions">
            <a href="${dealer.map}" target="_blank" rel="noreferrer">Map</a>
            ${dealer.phone ? `<span class="plain-link">${dealer.phone}</span>` : '<span class="plain-link">Phone unavailable</span>'}
          </div>
        `;

        grid.appendChild(article);
      });
    }
  
    function refreshStateOptions() {
      const stateFilter = document.getElementById('stateFilter');
      if (!stateFilter) return;
  
      const activeBrand = document.querySelector('.brand-tab.active')?.dataset.brand || 'alpinestars';
      const currentValues = Array.from(stateFilter.options).map(option => option.value);
      const nextStates = new Set();
  
      const cards = document.querySelectorAll(`.brand-panel.active .dealer-card[data-state]`);
      cards.forEach(card => {
        const state = card.dataset.state;
        if (state) nextStates.add(state);
      });
  
      const valuesToKeep = ['all'];
      const selectedValue = stateFilter.value;
  
      stateFilter.innerHTML = '<option value="all">All States</option>';
  
      [...nextStates].sort().forEach(state => {
        valuesToKeep.push(state);
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateFilter.appendChild(option);
      });
  
      if (valuesToKeep.includes(selectedValue) && selectedValue !== 'all') {
        stateFilter.value = selectedValue;
      } else {
        stateFilter.value = 'all';
      }
    }

    function applyStateFilter() {
        const activeBrand = document.querySelector('.brand-tab.active')?.dataset.brand || 'alpinestars';
        const selectedState = stateFilter?.value || 'all';
        const activePanel = document.querySelector('.brand-panel.active');
        const cards = activePanel ? activePanel.querySelectorAll('.dealer-card') : [];

        cards.forEach(card => {
            const cardState = card.dataset.state || '';
            const visible = selectedState === 'all' || cardState === selectedState;
            card.classList.toggle('hidden-dealer', !visible);
        });

        const visibleCards = activePanel ? activePanel.querySelectorAll('.dealer-card:not(.hidden-dealer)') : [];
        const noDealerMessage = activePanel?.querySelector('.no-dealers-message');

        if (noDealerMessage) noDealerMessage.remove();

        if (visibleCards.length === 0 && activeBrand === 'alpinestars') {
            const emptyState = document.createElement('div');
            emptyState.className = 'no-dealers-message';
            emptyState.textContent = 'No dealers found for this state in the current Alpinestars list.';
            activePanel?.querySelector('.dealer-list-grid')?.appendChild(emptyState);
        }
    }

    function switchBrand(brand) {
        brandTabs.forEach(tab => {
            const isActive = tab.dataset.brand === brand;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', String(isActive));
        });

        brandPanels.forEach(panel => {
            const isActive = panel.dataset.panel === brand;
            panel.classList.toggle('active', isActive);
            panel.hidden = !isActive;
        });

        if (stateFilter) {
            stateFilter.value = 'all';
            refreshStateOptions();
        }

        applyStateFilter();
    }

    if (brandTabs.length) {
        brandTabs.forEach(tab => {
            tab.addEventListener('click', () => switchBrand(tab.dataset.brand));
        });
    }

    if (stateFilter) {
        stateFilter.addEventListener('change', applyStateFilter);
        populateStateOptions();
    }

    renderKytDealers();
    refreshStateOptions();
    applyStateFilter();

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Initialize Testimonial Slider
    if (document.querySelector('.testimonial-slider')) {
        const testimonialSwiper = new Swiper('.testimonial-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }
        });
    }
});