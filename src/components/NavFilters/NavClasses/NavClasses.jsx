import "./NavClasses.css";

export default function NavClasses() {
  return (
    <div className="nav-classes">
      <input
        type="checkbox"
        id="nav-classes-checkbox"
        className="nav-classes-checkbox"
      />
      <label htmlFor="nav-classes-checkbox" className="nav-classes-icon">
        <svg
          width="144"
          height="35"
          viewBox="0 0 144 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="nav-svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="143"
            height="27"
            rx="13.5"
            stroke="#2B2C2B"
            className="nav-classes-rect"
          />
          <path
            d="M16.1569 15.2871H17.2819C17.2233 15.8262 17.069 16.3086 16.819 16.7344C16.569 17.1602 16.2155 17.498 15.7584 17.748C15.3014 17.9941 14.7311 18.1172 14.0475 18.1172C13.5475 18.1172 13.0924 18.0234 12.6823 17.8359C12.276 17.6484 11.9264 17.3828 11.6334 17.0391C11.3405 16.6914 11.1139 16.2754 10.9538 15.791C10.7975 15.3027 10.7194 14.7598 10.7194 14.1621V13.3125C10.7194 12.7148 10.7975 12.1738 10.9538 11.6895C11.1139 11.2012 11.3424 10.7832 11.6393 10.4355C11.9401 10.0879 12.3014 9.82031 12.7233 9.63281C13.1452 9.44531 13.6198 9.35156 14.1471 9.35156C14.7916 9.35156 15.3366 9.47266 15.7819 9.71484C16.2272 9.95703 16.5729 10.293 16.819 10.7227C17.069 11.1484 17.2233 11.6426 17.2819 12.2051H16.1569C16.1022 11.8066 16.0006 11.4648 15.8522 11.1797C15.7038 10.8906 15.4928 10.668 15.2194 10.5117C14.9459 10.3555 14.5885 10.2773 14.1471 10.2773C13.7682 10.2773 13.4342 10.3496 13.1452 10.4941C12.86 10.6387 12.6198 10.8438 12.4245 11.1094C12.233 11.375 12.0885 11.6934 11.9909 12.0645C11.8932 12.4355 11.8444 12.8477 11.8444 13.3008V14.1621C11.8444 14.5801 11.8873 14.9727 11.9733 15.3398C12.0631 15.707 12.1979 16.0293 12.3776 16.3066C12.5573 16.584 12.7858 16.8027 13.0631 16.9629C13.3405 17.1191 13.6686 17.1973 14.0475 17.1973C14.528 17.1973 14.9108 17.1211 15.1959 16.9688C15.4811 16.8164 15.6959 16.5977 15.8405 16.3125C15.9889 16.0273 16.0944 15.6855 16.1569 15.2871ZM20.2966 9V18H19.2067V9H20.2966ZM26.2351 16.916V13.6523C26.2351 13.4023 26.1843 13.1855 26.0827 13.002C25.9851 12.8145 25.8366 12.6699 25.6374 12.5684C25.4382 12.4668 25.1921 12.416 24.8991 12.416C24.6257 12.416 24.3855 12.4629 24.1784 12.5566C23.9753 12.6504 23.8152 12.7734 23.698 12.9258C23.5847 13.0781 23.528 13.2422 23.528 13.418H22.4441C22.4441 13.1914 22.5027 12.9668 22.6198 12.7441C22.737 12.5215 22.905 12.3203 23.1238 12.1406C23.3464 11.957 23.612 11.8125 23.9206 11.707C24.2331 11.5977 24.5808 11.543 24.9636 11.543C25.4245 11.543 25.8308 11.6211 26.1823 11.7773C26.5378 11.9336 26.8152 12.1699 27.0144 12.4863C27.2175 12.7988 27.3191 13.1914 27.3191 13.6641V16.6172C27.3191 16.8281 27.3366 17.0527 27.3718 17.291C27.4109 17.5293 27.4675 17.7344 27.5417 17.9062V18H26.4109C26.3562 17.875 26.3132 17.709 26.282 17.502C26.2507 17.291 26.2351 17.0957 26.2351 16.916ZM26.4226 14.1562L26.4343 14.918H25.3386C25.03 14.918 24.7546 14.9434 24.5124 14.9941C24.2702 15.041 24.0671 15.1133 23.903 15.2109C23.739 15.3086 23.614 15.4316 23.528 15.5801C23.4421 15.7246 23.3991 15.8945 23.3991 16.0898C23.3991 16.2891 23.4441 16.4707 23.5339 16.6348C23.6238 16.7988 23.7585 16.9297 23.9382 17.0273C24.1218 17.1211 24.3464 17.168 24.612 17.168C24.9441 17.168 25.237 17.0977 25.4909 16.957C25.7448 16.8164 25.946 16.6445 26.0945 16.4414C26.2468 16.2383 26.3288 16.041 26.3405 15.8496L26.8034 16.3711C26.7761 16.5352 26.7019 16.7168 26.5808 16.916C26.4597 17.1152 26.2976 17.3066 26.0945 17.4902C25.8952 17.6699 25.657 17.8203 25.3796 17.9414C25.1062 18.0586 24.7976 18.1172 24.4538 18.1172C24.0241 18.1172 23.6472 18.0332 23.323 17.8652C23.0027 17.6973 22.7527 17.4727 22.573 17.1914C22.3972 16.9062 22.3093 16.5879 22.3093 16.2363C22.3093 15.8965 22.3757 15.5977 22.5085 15.3398C22.6413 15.0781 22.8327 14.8613 23.0827 14.6895C23.3327 14.5137 23.6335 14.3809 23.9851 14.291C24.3366 14.2012 24.7292 14.1562 25.1628 14.1562H26.4226ZM33.1755 16.3184C33.1755 16.1621 33.1404 16.0176 33.0701 15.8848C33.0037 15.748 32.865 15.625 32.6541 15.5156C32.447 15.4023 32.1345 15.3047 31.7166 15.2227C31.365 15.1484 31.0466 15.0605 30.7615 14.959C30.4802 14.8574 30.24 14.7344 30.0408 14.5898C29.8455 14.4453 29.6951 14.2754 29.5896 14.0801C29.4841 13.8848 29.4314 13.6562 29.4314 13.3945C29.4314 13.1445 29.4861 12.9082 29.5955 12.6855C29.7087 12.4629 29.867 12.2656 30.0701 12.0938C30.2771 11.9219 30.5252 11.7871 30.8142 11.6895C31.1033 11.5918 31.4255 11.543 31.781 11.543C32.2888 11.543 32.7224 11.6328 33.0818 11.8125C33.4412 11.9922 33.7166 12.2324 33.908 12.5332C34.0994 12.8301 34.1951 13.1602 34.1951 13.5234H33.1111C33.1111 13.3477 33.0584 13.1777 32.9529 13.0137C32.8513 12.8457 32.7009 12.707 32.5017 12.5977C32.3064 12.4883 32.0662 12.4336 31.781 12.4336C31.4802 12.4336 31.2361 12.4805 31.0486 12.5742C30.865 12.6641 30.7302 12.7793 30.6443 12.9199C30.5623 13.0605 30.5212 13.209 30.5212 13.3652C30.5212 13.4824 30.5408 13.5879 30.5798 13.6816C30.6228 13.7715 30.697 13.8555 30.8025 13.9336C30.908 14.0078 31.0564 14.0781 31.2478 14.1445C31.4392 14.2109 31.6834 14.2773 31.9802 14.3438C32.4998 14.4609 32.9275 14.6016 33.2634 14.7656C33.5994 14.9297 33.8494 15.1309 34.0134 15.3691C34.1775 15.6074 34.2595 15.8965 34.2595 16.2363C34.2595 16.5137 34.2009 16.7676 34.0837 16.998C33.9705 17.2285 33.8045 17.4277 33.5857 17.5957C33.3709 17.7598 33.113 17.8887 32.8123 17.9824C32.5154 18.0723 32.1814 18.1172 31.8103 18.1172C31.2517 18.1172 30.7791 18.0176 30.3923 17.8184C30.0056 17.6191 29.7127 17.3613 29.5134 17.0449C29.3142 16.7285 29.2146 16.3945 29.2146 16.043H30.3045C30.3201 16.3398 30.406 16.5762 30.5623 16.752C30.7185 16.9238 30.9099 17.0469 31.1365 17.1211C31.363 17.1914 31.5877 17.2266 31.8103 17.2266C32.1072 17.2266 32.3552 17.1875 32.5545 17.1094C32.7576 17.0312 32.9119 16.9238 33.0173 16.7871C33.1228 16.6504 33.1755 16.4941 33.1755 16.3184ZM39.8348 16.3184C39.8348 16.1621 39.7996 16.0176 39.7293 15.8848C39.6629 15.748 39.5242 15.625 39.3133 15.5156C39.1063 15.4023 38.7938 15.3047 38.3758 15.2227C38.0242 15.1484 37.7059 15.0605 37.4207 14.959C37.1395 14.8574 36.8992 14.7344 36.7 14.5898C36.5047 14.4453 36.3543 14.2754 36.2488 14.0801C36.1434 13.8848 36.0906 13.6562 36.0906 13.3945C36.0906 13.1445 36.1453 12.9082 36.2547 12.6855C36.368 12.4629 36.5262 12.2656 36.7293 12.0938C36.9363 11.9219 37.1844 11.7871 37.4734 11.6895C37.7625 11.5918 38.0848 11.543 38.4402 11.543C38.948 11.543 39.3816 11.6328 39.741 11.8125C40.1004 11.9922 40.3758 12.2324 40.5672 12.5332C40.7586 12.8301 40.8543 13.1602 40.8543 13.5234H39.7703C39.7703 13.3477 39.7176 13.1777 39.6121 13.0137C39.5105 12.8457 39.3602 12.707 39.1609 12.5977C38.9656 12.4883 38.7254 12.4336 38.4402 12.4336C38.1395 12.4336 37.8953 12.4805 37.7078 12.5742C37.5242 12.6641 37.3895 12.7793 37.3035 12.9199C37.2215 13.0605 37.1805 13.209 37.1805 13.3652C37.1805 13.4824 37.2 13.5879 37.2391 13.6816C37.282 13.7715 37.3563 13.8555 37.4617 13.9336C37.5672 14.0078 37.7156 14.0781 37.907 14.1445C38.0984 14.2109 38.3426 14.2773 38.6395 14.3438C39.159 14.4609 39.5867 14.6016 39.9227 14.7656C40.2586 14.9297 40.5086 15.1309 40.6727 15.3691C40.8367 15.6074 40.9188 15.8965 40.9188 16.2363C40.9188 16.5137 40.8602 16.7676 40.743 16.998C40.6297 17.2285 40.4637 17.4277 40.2449 17.5957C40.0301 17.7598 39.7723 17.8887 39.4715 17.9824C39.1746 18.0723 38.8406 18.1172 38.4695 18.1172C37.9109 18.1172 37.4383 18.0176 37.0516 17.8184C36.6648 17.6191 36.3719 17.3613 36.1727 17.0449C35.9734 16.7285 35.8738 16.3945 35.8738 16.043H36.9637C36.9793 16.3398 37.0652 16.5762 37.2215 16.752C37.3777 16.9238 37.5691 17.0469 37.7957 17.1211C38.0223 17.1914 38.2469 17.2266 38.4695 17.2266C38.7664 17.2266 39.0145 17.1875 39.2137 17.1094C39.4168 17.0312 39.5711 16.9238 39.6766 16.7871C39.782 16.6504 39.8348 16.4941 39.8348 16.3184ZM45.4334 18.1172C44.992 18.1172 44.5916 18.043 44.2323 17.8945C43.8768 17.7422 43.5702 17.5293 43.3123 17.2559C43.0584 16.9824 42.8631 16.6582 42.7264 16.2832C42.5897 15.9082 42.5213 15.498 42.5213 15.0527V14.8066C42.5213 14.291 42.5975 13.832 42.7498 13.4297C42.9022 13.0234 43.1092 12.6797 43.3709 12.3984C43.6327 12.1172 43.9295 11.9043 44.2616 11.7598C44.5936 11.6152 44.9373 11.543 45.2928 11.543C45.7459 11.543 46.1366 11.6211 46.4647 11.7773C46.7967 11.9336 47.0682 12.1523 47.2791 12.4336C47.4901 12.7109 47.6463 13.0391 47.7479 13.418C47.8495 13.793 47.9002 14.2031 47.9002 14.6484V15.1348H43.1659V14.25H46.8162V14.168C46.8006 13.8867 46.742 13.6133 46.6405 13.3477C46.5428 13.082 46.3866 12.8633 46.1717 12.6914C45.9569 12.5195 45.6639 12.4336 45.2928 12.4336C45.0467 12.4336 44.8202 12.4863 44.6131 12.5918C44.4061 12.6934 44.2284 12.8457 44.0799 13.0488C43.9315 13.252 43.8162 13.5 43.7342 13.793C43.6522 14.0859 43.6112 14.4238 43.6112 14.8066V15.0527C43.6112 15.3535 43.6522 15.6367 43.7342 15.9023C43.8202 16.1641 43.9432 16.3945 44.1034 16.5938C44.2674 16.793 44.4647 16.9492 44.6952 17.0625C44.9295 17.1758 45.1952 17.2324 45.492 17.2324C45.8748 17.2324 46.1991 17.1543 46.4647 16.998C46.7303 16.8418 46.9627 16.6328 47.162 16.3711L47.8182 16.8926C47.6815 17.0996 47.5077 17.2969 47.2967 17.4844C47.0858 17.6719 46.826 17.8242 46.5174 17.9414C46.2127 18.0586 45.8514 18.1172 45.4334 18.1172ZM53.3173 16.3184C53.3173 16.1621 53.2821 16.0176 53.2118 15.8848C53.1454 15.748 53.0067 15.625 52.7958 15.5156C52.5887 15.4023 52.2762 15.3047 51.8583 15.2227C51.5067 15.1484 51.1884 15.0605 50.9032 14.959C50.622 14.8574 50.3817 14.7344 50.1825 14.5898C49.9872 14.4453 49.8368 14.2754 49.7313 14.0801C49.6259 13.8848 49.5731 13.6562 49.5731 13.3945C49.5731 13.1445 49.6278 12.9082 49.7372 12.6855C49.8505 12.4629 50.0087 12.2656 50.2118 12.0938C50.4188 11.9219 50.6669 11.7871 50.9559 11.6895C51.245 11.5918 51.5673 11.543 51.9227 11.543C52.4305 11.543 52.8641 11.6328 53.2235 11.8125C53.5829 11.9922 53.8583 12.2324 54.0497 12.5332C54.2411 12.8301 54.3368 13.1602 54.3368 13.5234H53.2528C53.2528 13.3477 53.2001 13.1777 53.0946 13.0137C52.993 12.8457 52.8427 12.707 52.6434 12.5977C52.4481 12.4883 52.2079 12.4336 51.9227 12.4336C51.622 12.4336 51.3778 12.4805 51.1903 12.5742C51.0067 12.6641 50.872 12.7793 50.786 12.9199C50.704 13.0605 50.663 13.209 50.663 13.3652C50.663 13.4824 50.6825 13.5879 50.7216 13.6816C50.7645 13.7715 50.8387 13.8555 50.9442 13.9336C51.0497 14.0078 51.1981 14.0781 51.3895 14.1445C51.5809 14.2109 51.8251 14.2773 52.122 14.3438C52.6415 14.4609 53.0692 14.6016 53.4052 14.7656C53.7411 14.9297 53.9911 15.1309 54.1552 15.3691C54.3192 15.6074 54.4012 15.8965 54.4012 16.2363C54.4012 16.5137 54.3427 16.7676 54.2255 16.998C54.1122 17.2285 53.9462 17.4277 53.7274 17.5957C53.5126 17.7598 53.2548 17.8887 52.954 17.9824C52.6571 18.0723 52.3231 18.1172 51.952 18.1172C51.3934 18.1172 50.9208 18.0176 50.5341 17.8184C50.1473 17.6191 49.8544 17.3613 49.6552 17.0449C49.4559 16.7285 49.3563 16.3945 49.3563 16.043H50.4462C50.4618 16.3398 50.5477 16.5762 50.704 16.752C50.8602 16.9238 51.0516 17.0469 51.2782 17.1211C51.5048 17.1914 51.7294 17.2266 51.952 17.2266C52.2489 17.2266 52.497 17.1875 52.6962 17.1094C52.8993 17.0312 53.0536 16.9238 53.1591 16.7871C53.2645 16.6504 53.3173 16.4941 53.3173 16.3184ZM61.2978 13.2656L62.5752 12.3574C62.8213 12.1895 63.0107 12.0215 63.1435 11.8535C63.2802 11.6816 63.3486 11.4473 63.3486 11.1504C63.3486 10.9199 63.2588 10.7109 63.0791 10.5234C62.8994 10.332 62.6455 10.2363 62.3173 10.2363C62.0908 10.2363 61.8994 10.2891 61.7431 10.3945C61.5869 10.5 61.4697 10.6406 61.3916 10.8164C61.3134 10.9883 61.2744 11.1777 61.2744 11.3848C61.2744 11.5605 61.3173 11.7422 61.4033 11.9297C61.4892 12.1172 61.6084 12.3125 61.7607 12.5156C61.913 12.7188 62.0869 12.9336 62.2822 13.1602L66.3193 18H65.0185L61.708 14.0391C61.415 13.6953 61.1533 13.3809 60.9228 13.0957C60.6923 12.8066 60.5107 12.5273 60.3779 12.2578C60.249 11.9883 60.1845 11.709 60.1845 11.4199C60.1845 10.9746 60.2724 10.5996 60.4482 10.2949C60.6279 9.98633 60.8779 9.75195 61.1982 9.5918C61.5185 9.43164 61.8935 9.35156 62.3232 9.35156C62.7412 9.35156 63.1005 9.43555 63.4013 9.60352C63.706 9.76758 63.9404 9.98633 64.1045 10.2598C64.2685 10.5293 64.3505 10.8262 64.3505 11.1504C64.3505 11.4238 64.3017 11.6699 64.2041 11.8887C64.1064 12.1035 63.9697 12.3008 63.7939 12.4805C63.622 12.6602 63.4209 12.8359 63.1904 13.0078L61.497 14.2676C61.2158 14.4746 61.0107 14.6719 60.8818 14.8594C60.7529 15.0469 60.6689 15.2129 60.6298 15.3574C60.5947 15.502 60.5771 15.6172 60.5771 15.7031C60.5771 15.9805 60.6377 16.2344 60.7588 16.4648C60.8798 16.6953 61.0634 16.8809 61.3095 17.0215C61.5595 17.1582 61.872 17.2266 62.247 17.2266C62.5752 17.2266 62.8935 17.1523 63.2021 17.0039C63.5146 16.8516 63.7939 16.6367 64.04 16.3594C64.2861 16.0781 64.4814 15.7441 64.6259 15.3574C64.7744 14.9668 64.8486 14.5352 64.8486 14.0625H65.8213C65.8213 14.4492 65.7841 14.8145 65.7099 15.1582C65.6357 15.502 65.5205 15.8223 65.3642 16.1191C65.2119 16.4121 65.0166 16.6797 64.7783 16.9219C64.7431 16.957 64.7158 16.998 64.6963 17.0449C64.6767 17.0918 64.6494 17.1328 64.6142 17.168C64.3213 17.4844 63.9599 17.7227 63.5302 17.8828C63.1045 18.0391 62.6767 18.1172 62.247 18.1172C61.6806 18.1172 61.1904 18.0137 60.7763 17.8066C60.3662 17.5996 60.0498 17.3145 59.8271 16.9512C59.6045 16.5879 59.4931 16.1719 59.4931 15.7031C59.4931 15.3438 59.5693 15.0273 59.7216 14.7539C59.8779 14.4805 60.0908 14.2246 60.3603 13.9863C60.6338 13.748 60.9463 13.5078 61.2978 13.2656ZM73.4912 15.4219L75.1846 9.46875H76.0049L75.5303 11.7832L73.708 18H72.8936L73.4912 15.4219ZM71.7393 9.46875L73.087 15.3047L73.4912 18H72.6827L70.6143 9.46875H71.7393ZM78.1963 15.2988L79.5147 9.46875H80.6455L78.583 18H77.7745L78.1963 15.2988ZM76.128 9.46875L77.7745 15.4219L78.3721 18H77.5577L75.7998 11.7832L75.3194 9.46875H76.128ZM81.7208 14.9004V14.7656C81.7208 14.3086 81.7872 13.8848 81.92 13.4941C82.0528 13.0996 82.2442 12.7578 82.4942 12.4688C82.7442 12.1758 83.047 11.9492 83.4024 11.7891C83.7579 11.625 84.1563 11.543 84.5977 11.543C85.043 11.543 85.4434 11.625 85.7989 11.7891C86.1583 11.9492 86.463 12.1758 86.713 12.4688C86.9669 12.7578 87.1602 13.0996 87.293 13.4941C87.4259 13.8848 87.4923 14.3086 87.4923 14.7656V14.9004C87.4923 15.3574 87.4259 15.7812 87.293 16.1719C87.1602 16.5625 86.9669 16.9043 86.713 17.1973C86.463 17.4863 86.1602 17.7129 85.8048 17.877C85.4532 18.0371 85.0548 18.1172 84.6095 18.1172C84.1641 18.1172 83.7637 18.0371 83.4083 17.877C83.0528 17.7129 82.7481 17.4863 82.4942 17.1973C82.2442 16.9043 82.0528 16.5625 81.92 16.1719C81.7872 15.7812 81.7208 15.3574 81.7208 14.9004ZM82.8048 14.7656V14.9004C82.8048 15.2168 82.8419 15.5156 82.9161 15.7969C82.9903 16.0742 83.1016 16.3203 83.2501 16.5352C83.4024 16.75 83.5919 16.9199 83.8184 17.0449C84.045 17.166 84.3087 17.2266 84.6095 17.2266C84.9063 17.2266 85.1661 17.166 85.3887 17.0449C85.6153 16.9199 85.8028 16.75 85.9512 16.5352C86.0997 16.3203 86.211 16.0742 86.2852 15.7969C86.3634 15.5156 86.4024 15.2168 86.4024 14.9004V14.7656C86.4024 14.4531 86.3634 14.1582 86.2852 13.8809C86.211 13.5996 86.0977 13.3516 85.9454 13.1367C85.797 12.918 85.6095 12.7461 85.3829 12.6211C85.1602 12.4961 84.8985 12.4336 84.5977 12.4336C84.3009 12.4336 84.0391 12.4961 83.8126 12.6211C83.5899 12.7461 83.4024 12.918 83.2501 13.1367C83.1016 13.3516 82.9903 13.5996 82.9161 13.8809C82.8419 14.1582 82.8048 14.4531 82.8048 14.7656ZM90.3956 12.6562V18H89.3116V11.6602H90.3663L90.3956 12.6562ZM92.3761 11.625L92.3702 12.6328C92.2804 12.6133 92.1945 12.6016 92.1124 12.5977C92.0343 12.5898 91.9445 12.5859 91.8429 12.5859C91.5929 12.5859 91.3722 12.625 91.1808 12.7031C90.9894 12.7812 90.8273 12.8906 90.6945 13.0312C90.5616 13.1719 90.4562 13.3398 90.378 13.5352C90.3038 13.7266 90.255 13.9375 90.2316 14.168L89.9269 14.3438C89.9269 13.9609 89.964 13.6016 90.0382 13.2656C90.1163 12.9297 90.2355 12.6328 90.3956 12.375C90.5558 12.1133 90.7589 11.9102 91.005 11.7656C91.255 11.6172 91.5519 11.543 91.8956 11.543C91.9737 11.543 92.0636 11.5527 92.1652 11.5723C92.2667 11.5879 92.337 11.6055 92.3761 11.625ZM94.9279 9V18H93.8381V9H94.9279ZM98.8009 11.6602L96.0353 14.6191L94.4884 16.2246L94.4006 15.0703L95.508 13.7461L97.4767 11.6602H98.8009ZM97.8107 18L95.549 14.9766L96.1115 14.0098L99.0881 18H97.8107ZM104.071 16.3184C104.071 16.1621 104.036 16.0176 103.966 15.8848C103.9 15.748 103.761 15.625 103.55 15.5156C103.343 15.4023 103.03 15.3047 102.613 15.2227C102.261 15.1484 101.943 15.0605 101.657 14.959C101.376 14.8574 101.136 14.7344 100.937 14.5898C100.741 14.4453 100.591 14.2754 100.486 14.0801C100.38 13.8848 100.327 13.6562 100.327 13.3945C100.327 13.1445 100.382 12.9082 100.491 12.6855C100.605 12.4629 100.763 12.2656 100.966 12.0938C101.173 11.9219 101.421 11.7871 101.71 11.6895C101.999 11.5918 102.321 11.543 102.677 11.543C103.185 11.543 103.618 11.6328 103.978 11.8125C104.337 11.9922 104.613 12.2324 104.804 12.5332C104.995 12.8301 105.091 13.1602 105.091 13.5234H104.007C104.007 13.3477 103.954 13.1777 103.849 13.0137C103.747 12.8457 103.597 12.707 103.398 12.5977C103.202 12.4883 102.962 12.4336 102.677 12.4336C102.376 12.4336 102.132 12.4805 101.945 12.5742C101.761 12.6641 101.626 12.7793 101.54 12.9199C101.458 13.0605 101.417 13.209 101.417 13.3652C101.417 13.4824 101.437 13.5879 101.476 13.6816C101.519 13.7715 101.593 13.8555 101.698 13.9336C101.804 14.0078 101.952 14.0781 102.144 14.1445C102.335 14.2109 102.579 14.2773 102.876 14.3438C103.396 14.4609 103.823 14.6016 104.159 14.7656C104.495 14.9297 104.745 15.1309 104.909 15.3691C105.073 15.6074 105.155 15.8965 105.155 16.2363C105.155 16.5137 105.097 16.7676 104.98 16.998C104.866 17.2285 104.7 17.4277 104.482 17.5957C104.267 17.7598 104.009 17.8887 103.708 17.9824C103.411 18.0723 103.077 18.1172 102.706 18.1172C102.148 18.1172 101.675 18.0176 101.288 17.8184C100.902 17.6191 100.609 17.3613 100.409 17.0449C100.21 16.7285 100.111 16.3945 100.111 16.043H101.2C101.216 16.3398 101.302 16.5762 101.458 16.752C101.614 16.9238 101.806 17.0469 102.032 17.1211C102.259 17.1914 102.484 17.2266 102.706 17.2266C103.003 17.2266 103.251 17.1875 103.45 17.1094C103.654 17.0312 103.808 16.9238 103.913 16.7871C104.019 16.6504 104.071 16.4941 104.071 16.3184ZM108.123 9V18H107.039V9H108.123ZM107.865 14.5898L107.414 14.5723C107.418 14.1387 107.483 13.7383 107.608 13.3711C107.733 13 107.908 12.6777 108.135 12.4043C108.362 12.1309 108.631 11.9199 108.944 11.7715C109.26 11.6191 109.61 11.543 109.992 11.543C110.305 11.543 110.586 11.5859 110.836 11.6719C111.086 11.7539 111.299 11.8867 111.475 12.0703C111.655 12.2539 111.791 12.4922 111.885 12.7852C111.979 13.0742 112.026 13.4277 112.026 13.8457V18H110.936V13.834C110.936 13.502 110.887 13.2363 110.789 13.0371C110.692 12.834 110.549 12.6875 110.362 12.5977C110.174 12.5039 109.944 12.457 109.67 12.457C109.401 12.457 109.155 12.5137 108.932 12.627C108.713 12.7402 108.524 12.8965 108.364 13.0957C108.207 13.2949 108.084 13.5234 107.994 13.7812C107.908 14.0352 107.865 14.3047 107.865 14.5898ZM113.822 14.9004V14.7656C113.822 14.3086 113.888 13.8848 114.021 13.4941C114.154 13.0996 114.345 12.7578 114.595 12.4688C114.845 12.1758 115.148 11.9492 115.503 11.7891C115.859 11.625 116.257 11.543 116.699 11.543C117.144 11.543 117.544 11.625 117.9 11.7891C118.259 11.9492 118.564 12.1758 118.814 12.4688C119.068 12.7578 119.261 13.0996 119.394 13.4941C119.527 13.8848 119.593 14.3086 119.593 14.7656V14.9004C119.593 15.3574 119.527 15.7812 119.394 16.1719C119.261 16.5625 119.068 16.9043 118.814 17.1973C118.564 17.4863 118.261 17.7129 117.906 17.877C117.554 18.0371 117.156 18.1172 116.71 18.1172C116.265 18.1172 115.865 18.0371 115.509 17.877C115.154 17.7129 114.849 17.4863 114.595 17.1973C114.345 16.9043 114.154 16.5625 114.021 16.1719C113.888 15.7812 113.822 15.3574 113.822 14.9004ZM114.906 14.7656V14.9004C114.906 15.2168 114.943 15.5156 115.017 15.7969C115.091 16.0742 115.202 16.3203 115.351 16.5352C115.503 16.75 115.693 16.9199 115.919 17.0449C116.146 17.166 116.409 17.2266 116.71 17.2266C117.007 17.2266 117.267 17.166 117.49 17.0449C117.716 16.9199 117.904 16.75 118.052 16.5352C118.2 16.3203 118.312 16.0742 118.386 15.7969C118.464 15.5156 118.503 15.2168 118.503 14.9004V14.7656C118.503 14.4531 118.464 14.1582 118.386 13.8809C118.312 13.5996 118.199 13.3516 118.046 13.1367C117.898 12.918 117.71 12.7461 117.484 12.6211C117.261 12.4961 116.999 12.4336 116.699 12.4336C116.402 12.4336 116.14 12.4961 115.913 12.6211C115.691 12.7461 115.503 12.918 115.351 13.1367C115.202 13.3516 115.091 13.5996 115.017 13.8809C114.943 14.1582 114.906 14.4531 114.906 14.7656ZM122.496 12.8789V20.4375H121.407V11.6602H122.403L122.496 12.8789ZM126.768 14.7773V14.9004C126.768 15.3613 126.713 15.7891 126.604 16.1836C126.494 16.5742 126.334 16.9141 126.123 17.2031C125.916 17.4922 125.66 17.7168 125.356 17.877C125.051 18.0371 124.701 18.1172 124.307 18.1172C123.905 18.1172 123.549 18.0508 123.241 17.918C122.932 17.7852 122.67 17.5918 122.455 17.3379C122.241 17.084 122.069 16.7793 121.94 16.4238C121.815 16.0684 121.729 15.668 121.682 15.2227V14.5664C121.729 14.0977 121.817 13.6777 121.946 13.3066C122.075 12.9355 122.244 12.6191 122.455 12.3574C122.67 12.0918 122.93 11.8906 123.235 11.7539C123.539 11.6133 123.891 11.543 124.289 11.543C124.688 11.543 125.041 11.6211 125.35 11.7773C125.659 11.9297 125.918 12.1484 126.129 12.4336C126.34 12.7188 126.498 13.0605 126.604 13.459C126.713 13.8535 126.768 14.293 126.768 14.7773ZM125.678 14.9004V14.7773C125.678 14.4609 125.645 14.1641 125.578 13.8867C125.512 13.6055 125.409 13.3594 125.268 13.1484C125.131 12.9336 124.955 12.7656 124.741 12.6445C124.526 12.5195 124.27 12.457 123.973 12.457C123.7 12.457 123.461 12.5039 123.258 12.5977C123.059 12.6914 122.889 12.8184 122.748 12.9785C122.608 13.1348 122.493 13.3145 122.403 13.5176C122.317 13.7168 122.252 13.9238 122.209 14.1387V15.6562C122.287 15.9297 122.397 16.1875 122.537 16.4297C122.678 16.668 122.866 16.8613 123.1 17.0098C123.334 17.1543 123.629 17.2266 123.985 17.2266C124.278 17.2266 124.53 17.166 124.741 17.0449C124.955 16.9199 125.131 16.75 125.268 16.5352C125.409 16.3203 125.512 16.0742 125.578 15.7969C125.645 15.5156 125.678 15.2168 125.678 14.9004ZM132.302 16.3184C132.302 16.1621 132.267 16.0176 132.197 15.8848C132.13 15.748 131.992 15.625 131.781 15.5156C131.574 15.4023 131.261 15.3047 130.843 15.2227C130.492 15.1484 130.173 15.0605 129.888 14.959C129.607 14.8574 129.367 14.7344 129.167 14.5898C128.972 14.4453 128.822 14.2754 128.716 14.0801C128.611 13.8848 128.558 13.6562 128.558 13.3945C128.558 13.1445 128.613 12.9082 128.722 12.6855C128.835 12.4629 128.994 12.2656 129.197 12.0938C129.404 11.9219 129.652 11.7871 129.941 11.6895C130.23 11.5918 130.552 11.543 130.908 11.543C131.415 11.543 131.849 11.6328 132.208 11.8125C132.568 11.9922 132.843 12.2324 133.035 12.5332C133.226 12.8301 133.322 13.1602 133.322 13.5234H132.238C132.238 13.3477 132.185 13.1777 132.079 13.0137C131.978 12.8457 131.827 12.707 131.628 12.5977C131.433 12.4883 131.193 12.4336 130.908 12.4336C130.607 12.4336 130.363 12.4805 130.175 12.5742C129.992 12.6641 129.857 12.7793 129.771 12.9199C129.689 13.0605 129.648 13.209 129.648 13.3652C129.648 13.4824 129.667 13.5879 129.706 13.6816C129.749 13.7715 129.824 13.8555 129.929 13.9336C130.035 14.0078 130.183 14.0781 130.374 14.1445C130.566 14.2109 130.81 14.2773 131.107 14.3438C131.626 14.4609 132.054 14.6016 132.39 14.7656C132.726 14.9297 132.976 15.1309 133.14 15.3691C133.304 15.6074 133.386 15.8965 133.386 16.2363C133.386 16.5137 133.327 16.7676 133.21 16.998C133.097 17.2285 132.931 17.4277 132.712 17.5957C132.497 17.7598 132.24 17.8887 131.939 17.9824C131.642 18.0723 131.308 18.1172 130.937 18.1172C130.378 18.1172 129.906 18.0176 129.519 17.8184C129.132 17.6191 128.839 17.3613 128.64 17.0449C128.441 16.7285 128.341 16.3945 128.341 16.043H129.431C129.447 16.3398 129.533 16.5762 129.689 16.752C129.845 16.9238 130.036 17.0469 130.263 17.1211C130.49 17.1914 130.714 17.2266 130.937 17.2266C131.234 17.2266 131.482 17.1875 131.681 17.1094C131.884 17.0312 132.038 16.9238 132.144 16.7871C132.249 16.6504 132.302 16.4941 132.302 16.3184Z"
            fill="#2B2C2B"
            className="nav-classes-line"
          />
        </svg>
      </label>
    </div>
  );
}