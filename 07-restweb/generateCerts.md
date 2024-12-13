1 Generamos el certificado

para linux y macos
```
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```
respondemos una serie de respuestas y las metemos en una carpeta keys y los guardamos aquí

para windows corremos el mismo comando pero es posible que no tengamos openssl, podemos usarlo con gitbash
esto debería de funcionar