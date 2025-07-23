# Specification Config Domain Model Entities

```mermaid
erDiagram
    Specification {
        string id
        string name
        string status "enum: DRAFT, PUBLISHED"
        date createdAt
        date updatedAt
        string version
        string layout "ref: Layout"
        Billing billing
        Postage postage
        SupplierSpec supplierSpec
    }
    Billing {
        number basePrice
        number unitPrice
    }
    Postage {
        string tariff
        string size
        number deliverySLA
        number maxPages
        number maxWeight
        number maxThickness
    }
    SupplierSpec {
        string envelope "ref: Envelope"
        string printColour "enum: BLACK, COLOUR"
        string paperColour
        string insert "ref: Insert"
        string[] features "enum: SAME_DAY, BRAILLE, AUDIO_CD, MAILMARK"
        Record additional "&lt;string, string&gt;"
    }
    Envelope {
    }
    Insert {
    }
    Layout {
    }
    Envelope {
        string id
        string name
        string size "enum: C5, C4, DL"
        string[] features "enum: WHITEMAIL, NHS_BRANDING, NHS_BARCODE"
    }
    Layout {
        string id
        string name
        ContentBlocks[] contentBlocks
    }
    Insert {
        string id
        string name
        string type "enum: FLYER, BOOKLET"
        string source "enum: IN_HOUSE, EXTERNAL"
        string artwork "url"
    }
    SpecificationGroup {
        string id
        string name
        string description
        string[] specifications "ref: Specification"
    }
    Specification {
    }
    Specification }o--|| Layout : "layout"
    Specification ||--o{ Billing : "billing"
    Specification ||--|| Postage : "postage"
    Specification ||--|| SupplierSpec : "supplierSpec"
    SupplierSpec }o--|| Envelope : "envelope"
    SupplierSpec }o--o{ Insert : "insert"
    SpecificationGroup }o--o{ Specification : "specifications"
```
