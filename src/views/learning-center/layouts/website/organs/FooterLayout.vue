<template>
    <div class="footer">
        <div class="footer-logo d-flex align-items-center">
            <img height="200" width="200" src="@/assets/images/footer-logo-2.png" alt="">
        </div>
        <div class="footer-menu">
            <ul>
                <li>About</li>
                <li>What we offer</li>
                <li>Leadership</li>
                <li>Careers</li>
                <li>Catelog</li>
                <li>Professional Certificates</li>
                <li>All Courses</li>
                <li>Help and Support</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div class="footer-menu">
            <ul>
                <li>Learners</li>
                <li>Blog</li>
                <li>Teaching Centers</li>
                <li>Careers</li>
                <li>Catelog</li>
                <li>Professional Certificates</li>
                <li>All Courses</li>
                <li>Help and Support</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div class="footer-menu">
            <ul>
                <li>About</li>
                <li>What we offer</li>
                <li>Leadership</li>
                <li>Careers</li>
                <li>Catelog</li>
                <li>Professional Certificates</li>
                <li>All Courses</li>
                <li>Help and Support</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.footer {
    background: #0FA3B1;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    overflow: hidden;
}

.footer-logo {
    margin-top: 25px;
    display: flex;
    align-items: start;
    justify-content: center;
}

.footer-menu {
    padding: 25px;
}

.footer-menu ul li{
    color: white;
    list-style: none;
    padding: 3px 0;
    font-size: 13px;
}

.copyright {
    padding: 20px;
    display: grid;
    justify-self: end;
    align-self:end;
    gap: 20px;
}

.copyright p {
    color: white;
}

.copyright button {
    width: 150px;
    height: 30px;
    justify-self: end;
    border: none;
    outline: none;
    cursor: pointer;
}
</style>