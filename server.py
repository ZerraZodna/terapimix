#!/usr/bin/env python3
"""
Live Terapimix – Lokal Webserver
Støtter: HTML, CSS, JS
Port: 8080
"""

import http.server
import socketserver
import argparse
import sys

PORT = 8080
HOST = "127.0.0.1"

def main():
    parser = argparse.ArgumentParser(description="Start Terapimix lokal webserver")
    parser.add_argument("--port", type=int, default=PORT, help="Port å lytte på")
    parser.add_argument("--host", type=str, default=HOST, help="Host å lytte på")
    args = parser.parse_args()

    handler = http.server.SimpleHTTPRequestHandler

    with socketserver.TCPServer((args.host, args.port), handler) as httpd:
        print(f"Live Terapimix – Lokal webserver")
        print(f"Serverer fra: {args.host}:{args.port}")
        print(f"Åpner browser: http://{args.host}:{args.port}")
        print("Trykk Ctrl+C for å stoppe")

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stoppet.")
            sys.exit(0)

if __name__ == "__main__":
    main()
