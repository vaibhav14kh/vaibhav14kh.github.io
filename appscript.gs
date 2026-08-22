function doPost(e) {
  try {
    // 1. Parse the incoming JSON data from n8n
    var data = JSON.parse(e.postData.contents);
    var name = data.name || "Professional";
    var phone = data.phone || "N/A";
    var email = data.email;
    var toolId = data.toolId || "FullSuite";
    var timestamp = data.timestamp || new Date().toISOString();

    // 2. Log the data into the active Google Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([name, phone, email, toolId, timestamp]);

    // 3. Map the Tool ID to the correct access link
    var toolName = "Automation Arsenal";
    var accessLink = "https://ai.manidesigns.in/"; 
    
    // Mapping based on your GitHub files
    if(toolId === "PDFKIT") {
      toolName = "PDF Kit";
      accessLink = "https://ai.manidesigns.in/PDFKIT.html?auth=true";
    } else if(toolId === "EMBASSY") {
      toolName = "CA Report Generator";
      accessLink = "https://ai.manidesigns.in/CA_Report_Generator_V2.html?auth=true"; 
    } else if(toolId === "DEED") {
      toolName = "Partnership Deed Drafter";
      accessLink = "https://ai.manidesigns.in/Partnership_Deed_Drafter_V2.html?auth=true";
    } else if(toolId === "ENGAGE") {
      toolName = "Engagement Letter Generator";
      accessLink = "https://ai.manidesigns.in/Engagement_Letter_Generator_V2.html?auth=true"; // Update filename if different
    } else if(toolId === "BOARD") {
      toolName = "Board Resolution Generator";
      accessLink = "https://ai.manidesigns.in/Board_Resolution_Generator_V2.html?auth=true";
    } else if(toolId === "DIR") {
      toolName = "Directors' Report Engine";
      accessLink = "https://ai.manidesigns.in/Directors_Report_V2.html?auth=true";
    } else if(toolId === "ESIC") {
      toolName = "ESIC Challan Extractor";
      accessLink = "https://ai.manidesigns.in/ESIC_Challan_Extractor_V2.html?auth=true";
    } else if(toolId === "TDS") {
      toolName = "TDS Challan Extractor";
      accessLink = "https://ai.manidesigns.in/TDS_Challan_Extractor_V2.html?auth=true"; // Update filename if different
    } else if(toolId === "CHALLAN") {
      toolName = "Multi-Challan Extractor";
      accessLink = "https://ai.manidesigns.in/Challan_Extractor_V2.html?auth=true"; // Update filename if different
    } else if(toolId === "BANK") {
      toolName = "Bank Statement Analyzer";
      accessLink = "https://ai.manidesigns.in/Bank_Statement_Analyzer_V2.html?auth=true"; // Update filename if different
    } else if(toolId === "DAYBOOK") {
      toolName = "Tally DayBook Dashboard";
      accessLink = "https://ai.manidesigns.in/Tally_DayBook_Dashboard_V2.html?auth=true"; // Update filename if different
    } else if(toolId === "DEFF") {
      toolName = "Deferred Tax Calculator";
      accessLink = "https://ai.manidesigns.in/Deferred_Tax_Calculator_V2.html?auth=true";
    } else if(toolId === "CONV") {
      toolName = "Conveyance Reimbursement Form";
      accessLink = "https://ai.manidesigns.in/Conveyance_Reimbursement_Form_V2.html?auth=true";
    } else if(toolId === "DEP") {
      toolName = "Depreciation Calculator";
      accessLink = "https://ai.manidesigns.in/Depreciation_Calculator.html?auth=true";
    } else if(toolId === "PF") {
      toolName = "PF Challan Extractor";
      accessLink = "https://ai.manidesigns.in/PF_Challan_Extractor_V2.html?auth=true";
    } else if(toolId === "GAS") {
      // Add this new block for the GAS tool
      toolName = "Google Apps Script";
      accessLink = "https://drive.google.com/drive/folders/1QDq9EFdXdDKLmdEv-bbBK5ZJC8YPoj58?usp=drive_link";
    } else if(toolId === "CAHUB") {
      toolName = "CA Automation Hub";
      accessLink = "https://drive.google.com/file/d/1fBmntRkKQRklWwcZB_1Qjfm85GYNAMdd/view?usp=drive_link";
    }



    // 4. Draft the Branded HTML Email
    var subject = "Access Granted: " + toolName + " | Automation Hub";
    var htmlBody = `
      <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          
          <!-- Header -->
          <div style="background-color: #ffffff; padding: 24px; border-bottom: 1px solid #e2e8f0; text-align: center;">
            <span style="font-weight: 800; font-size: 24px; color: #1e293b; letter-spacing: -0.5px;">Automation <span style="color: #2563eb;">Hub</span></span>
          </div>
          
          <!-- Body -->
          <div style="padding: 32px 24px; line-height: 1.6;">
            <p style="font-size: 16px; margin-bottom: 20px;">Hi <strong>${name}</strong>,</p>
            <p style="font-size: 16px; margin-bottom: 32px;">Thank you for your interest in eradicating manual data drudgery. As requested from our LinkedIn series, your secure automation tool is ready for deployment.</p>
            
            <div style="text-align: center; margin-bottom: 32px;">
              <a href="${accessLink}" style="display: inline-block; background-color: #2563eb; color: #ffffff; font-weight: 600; font-size: 16px; text-decoration: none; padding: 14px 28px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);">
                Launch ${toolName}
              </a>
            </div>
            
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
              <p style="font-size: 13px; color: #64748b; margin: 0;"><strong>Privacy Architecture:</strong> This tool operates entirely within your local browser. Zero financial data is uploaded to external servers, ensuring strict compliance and client confidentiality.</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="font-size: 12px; color: #64748b; margin: 0;">&copy; 2026 Automation Hub | CA. Vaibhav Khanna</p>
            <p style="font-size: 12px; color: #64748b; margin: 4px 0 0 0;">Amritsar, Punjab</p>
          </div>
          
        </div>
      </div>
    `;

    // 5. Send the Email using the Custom Domain Alias
    // Ensure 'noreply@manidesigns.in' is EXACTLY the alias you verified in Gmail Settings
    GmailApp.sendEmail(email, subject, "", {
      htmlBody: htmlBody,
      from: 'noreply@manidesigns.in', 
      name: 'Automation Hub | Vaibhav Khanna'
    });

    // 6. Return success to n8n
    return ContentService.createTextOutput(JSON.stringify({"status": "success"})).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
function testAuth() {
  GmailApp.sendEmail("kh.vaibhav@gmail.com", "Authorization Test", "If you receive this, permissions are granted.");
}

function resendCAHubEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  // The correct link and name
  var toolName = "CA Automation Hub";
  var accessLink = "https://drive.google.com/file/d/1fBmntRkKQRklWwcZB_1Qjfm85GYNAMdd/view?usp=drive_link";
  
  // Loop through all rows in your sheet
  for (var i = 0; i < data.length; i++) {
    var name = data[i][0];       // Column A
    var email = data[i][2];      // Column C
    var toolId = data[i][3];     // Column D
    var status = data[i][5];     // Column F (Tracking)
    
    // If it is a CAHUB request AND we haven't already marked it "Resent"
    if (toolId === "CAHUB" && status !== "Resent" && email && email.includes("@")) {
      
      var subject = "Correction: Your Access Link for " + toolName;
      
      var htmlBody = `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
            
            <div style="background-color: #ffffff; padding: 24px; border-bottom: 1px solid #e2e8f0; text-align: center;">
              <span style="font-weight: 800; font-size: 24px; color: #1e293b; letter-spacing: -0.5px;">Automation <span style="color: #2563eb;">Hub</span></span>
            </div>
            
            <div style="padding: 32px 24px; line-height: 1.6;">
              <p style="font-size: 16px; margin-bottom: 20px;">Hi <strong>${name}</strong>,</p>
              <p style="font-size: 16px; margin-bottom: 32px;">You recently requested access to the <strong>${toolName}</strong>. We noticed the previous email contained an incorrect link that routed you back to the homepage. We apologize for the glitch!</p>
              <p style="font-size: 16px; margin-bottom: 32px;">Here is your corrected access link:</p>
              
              <div style="text-align: center; margin-bottom: 32px;">
                <a href="${accessLink}" style="display: inline-block; background-color: #2563eb; color: #ffffff; font-weight: 600; font-size: 16px; text-decoration: none; padding: 14px 28px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.3);">
                  Access ${toolName} Now
                </a>
              </div>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="font-size: 12px; color: #64748b; margin: 0;">&copy; 2026 Automation Hub | CA. Vaibhav Khanna</p>
            </div>
            
          </div>
        </div>
      `;
      
      try {
        // Send the corrected email
        GmailApp.sendEmail(email, subject, "", {
          htmlBody: htmlBody,
          from: 'noreply@manidesigns.in', 
          name: 'Automation Hub | Vaibhav Khanna'
        });
        
        // Mark as Resent in Column F (Row i+1, Column 6)
        sheet.getRange(i + 1, 6).setValue("Resent");
        
      } catch(error) {
        // Log any errors so you know if an email failed
        sheet.getRange(i + 1, 6).setValue("Error: " + error.toString());
      }
    }
  }
}