## Netlify CMS example for vuepress 

### Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bloycey/vuepress-bones)

### Setup Netlify Identity
1. Open Netlify Identity Settings page.
1. Enable Identity
1. Select Registration preferences -> Invite only
1. Enable Git Gateway

### Invite admin user
1. Open Identity tab in Netlify site page.
1. Push Invite users
1. Input email address and push 'Send' button.
1. Open invite email and set password.

### Development
Check out code from your repository

```
# Install npm modules
yarn install

# Start local dev server
yarn docs:dev
```

### Useful Links

- Collection Types. These are defined in `docs/.vuepress/public/admin/config.yml` : https://www.netlifycms.org/docs/collection-types/


