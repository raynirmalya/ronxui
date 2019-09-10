export interface ColumnConfig {
    field: string;
    title: string;
    dataType?: string;
    htmlElType?: string;
    colspan?: number;
    subColumns?: ColumnConfig [];
}