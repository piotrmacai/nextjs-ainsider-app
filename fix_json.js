const fs = require('fs');
const path = require('path');

const enPath = path.join(process.cwd(), 'i18n/en.json');
const plPath = path.join(process.cwd(), 'i18n/pl.json');

function fixEn() {
    const content = fs.readFileSync(enPath, 'utf8');
    const lines = content.split('\n');

    // Remove junk lines 2290 to 2491 (1-based) -> indices 2289 to 2490
    // Keep line 2289 (index 2288) but replace it

    const header2Content = [
        '            "header2": "Powered by AI",',
        '            "desc1": "I create advanced integration solutions that connect AI chatbots and assistants with your business systems. I ensure seamless data synchronization between CRM, CMS, ticketing systems, and e-commerce platforms, automating sales processes and customer service. My solutions support multi-channel communication, real-time analytics, and personalized customer interactions.",',
        '            "button": "Explore Integration Possibilities"',
        '          }',
        '        }',
        '      }',
        '    }',
        '  },'
    ];

    // We want to keep lines 0 to 2287 (first 2288 lines).
    // Line 2288 (index) is the one to replace.
    // Lines 2289 to 2490 (indices) are junk to remove.
    // Lines 2491+ (indices) are ainsiderstore.

    const part1 = lines.slice(0, 2288);
    const part3 = lines.slice(2491); // ainsiderstore starts here

    // Fix indentation of part3 (ainsiderstore)
    // Currently indented with 8 spaces. We want 2 spaces.
    // But wait, the content inside needs to be shifted too.
    // ainsiderstore line: "        \"ainsiderstore\": {" -> "  \"ainsiderstore\": {"
    // So remove 6 spaces from start of each line in part3.

    const fixedPart3 = part3.map(line => {
        if (line.startsWith('      ')) {
            return line.substring(6); // Remove 6 spaces?
        }
        return line;
    });

    // Wait, let's check indentation.
    // Line 2492 (index 2491): "        \"ainsiderstore\": {" (8 spaces)
    // We want "  \"ainsiderstore\": {" (2 spaces)
    // So remove 6 spaces.

    const newLines = [...part1, ...header2Content, ...fixedPart3];
    fs.writeFileSync(enPath, newLines.join('\n'));
    console.log('Fixed en.json');
}

function fixPl() {
    const content = fs.readFileSync(plPath, 'utf8');
    const lines = content.split('\n');

    // Remove junk lines 2086 to 2288 (1-based) -> indices 2085 to 2287
    // Line 2085 (index 2084) is "      {" which replaced "header2": { ...
    // We want to replace index 2084 with correct header2 start.

    const header2Content = [
        '      "header2": {',
        '        "header1": "Inteligentna Integracja Systemów",',
        '        "header2": "Powered by AI",',
        '        "desc1": "Tworzę zaawansowane rozwiązania integracyjne, które łączą chatboty i asystentów AI z Twoimi systemami biznesowymi. Zapewniam płynną synchronizację danych między CRM, CMS, systemami ticketowymi i platformami e-commerce, automatyzując procesy sprzedażowe i obsługę klienta. Moje rozwiązania wspierają wielokanałową komunikację, analitykę w czasie rzeczywistym oraz personalizację interakcji z klientem.",',
        '        "button": "Zobacz Możliwości Integracji"',
        '      }',
        '    }',
        '  },'
    ];

    // Keep lines 0 to 2083 (first 2084 lines).
    // Index 2084 is the one to replace.
    // Indices 2085 to 2287 are junk.
    // Index 2288 is ainsiderstore start.

    const part1 = lines.slice(0, 2084);
    const part3 = lines.slice(2288);

    // Fix indentation of part3
    // Line 2289 (index 2288): "      \"ainsiderstore\": {" (6 spaces)
    // We want "  \"ainsiderstore\": {" (2 spaces)
    // So remove 4 spaces.

    const fixedPart3 = part3.map(line => {
        if (line.startsWith('    ')) {
            return line.substring(4);
        }
        return line;
    });

    const newLines = [...part1, ...header2Content, ...fixedPart3];
    fs.writeFileSync(plPath, newLines.join('\n'));
    console.log('Fixed pl.json');
}

fixEn();
fixPl();
