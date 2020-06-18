FROM hayd/ubuntu-deno:1.1.0

WORKDIR /app

USER deno

COPY . .

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "--allow-plugin", "--allow-env", "--unstable", "mod.ts"]