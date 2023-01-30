# Website crawler Github Action

## Usage

1. Fork this repo.
2. Create gmail address. And enable 2FA and generate app passwords.
    1. Go to your Google account at https://myaccount.google.com/
    2. Go to Security
    3. In "Signing in to Google" section choose 2-Step Verification - here you have to verify yourself, in my case it was with phone number and a confirmation code send as text message. After that you will be able to enabled 2-Step Verification
    4. Back to Security in "Signing in to Google" section choose App passwords
    5. From the Select app drop down choose Other (Custom name) and put a name e.g. nodemailer
    6. A modal dialog will appear with the password. Get that password and use it in your code.
3. Set Workflow permisson as read/write. Repo > Settings > Actioms (Sidebar) > General > Workflow permissions > Read and write permissions
4. Go to your forked repo's "Settings" tab and navigate to "Secrets" from left sidebar.
5. Create secrets according to your information:

```bash
MAIL_ADDRESS_FROM=abc@gmail.com
MAIL_ADDRESS_TO=to@gmail.com
MAIL_PASSWORD_FROM_PASSWORD=asldkjfqelas
MAIL_SUBJECT=Subject
MAIL_TEXT=Text
TARGET_DOM_ELEMENT_CURRENT_TEXT=YAKINDA STOKTA
TARGET_DOM_ELEMENT_QUERY=.add-to-cart__btn>span
URL_ITEMS=https://example.com;https://wikipedia.com
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
