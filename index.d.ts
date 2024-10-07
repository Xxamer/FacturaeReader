declare module 'facturaereader' {
    function getFacturae(): string;
    function readFacturae(file: File): string;

    export { getFacturae, readFacturae };
}
