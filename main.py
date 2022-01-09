##--IMPORTS--##
import socket

hostname = socket.gethostname()
ip = socket.gethostbyname(hostname)

print(f"""
    Hostname: {hostname}
    IP address: {ip}
""")
