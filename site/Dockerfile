FROM nginx

COPY testwrap.sh /

COPY omnifood /usr/share/nginx/html
RUN ["chmod", "+x", "./testwrap.sh"]
CMD ["./testwrap.sh"]
