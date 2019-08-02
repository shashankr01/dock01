FROM nginx

COPY testwrap.sh /
EXPOSE 5000

COPY omnifood /usr/share/nginx/html
RUN ["chmod", "+x", "./testwrap.sh"]
CMD ["./testwrap.sh"]
