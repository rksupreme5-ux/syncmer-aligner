/* tslint:disable */
/* eslint-disable */

export class EngineMetrics {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    bases_processed: number;
    compression_ratio: number;
    reads_processed: number;
    status: string;
    syncmers_indexed: number;
}

export function process_fastq(file_data: string, k: number, s: number): EngineMetrics;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_enginemetrics_free: (a: number, b: number) => void;
    readonly __wbg_get_enginemetrics_bases_processed: (a: number) => number;
    readonly __wbg_get_enginemetrics_compression_ratio: (a: number) => number;
    readonly __wbg_get_enginemetrics_reads_processed: (a: number) => number;
    readonly __wbg_get_enginemetrics_status: (a: number) => [number, number];
    readonly __wbg_get_enginemetrics_syncmers_indexed: (a: number) => number;
    readonly __wbg_set_enginemetrics_bases_processed: (a: number, b: number) => void;
    readonly __wbg_set_enginemetrics_compression_ratio: (a: number, b: number) => void;
    readonly __wbg_set_enginemetrics_reads_processed: (a: number, b: number) => void;
    readonly __wbg_set_enginemetrics_status: (a: number, b: number, c: number) => void;
    readonly __wbg_set_enginemetrics_syncmers_indexed: (a: number, b: number) => void;
    readonly process_fastq: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
