export default defineAppConfig({
  alpine: {
    title: 'Indo Global',
    description: 'Indo-Global Chamber of Commerce',
    image: {
      src: '/images/businessman-touching-virtual-screen.jpg',
      alt: 'Indo-Global Chamber of Commerce.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/images/glob-logo.png', // path of the logo
        pathDark: '/images/glob-logo-dark.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Indo Global' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow Indo Global on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'indoglobal',
      instagram: 'indoglobal',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/indoglobal'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
