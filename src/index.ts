// https://www.apollographql.com/docs/federation/quickstart/setup#1-install-the-rover-cli

function square(x: number): number {
    return x * x;
}

function main() {
    const sq = square(1111);

    console.log(`hi ${sq}`);
}

main();
