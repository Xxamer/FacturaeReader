// index.d.ts
declare module 'facturaereader' {
    class FacturaeReader {
        getFacturae(): string;
        readFacturae(file: File): string;
    }

    export default FacturaeReader;
}
