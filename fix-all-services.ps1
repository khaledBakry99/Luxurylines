# PowerShell script to fix all service pages with new color scheme

$services = @(
    "architectural-design",
    "decoration",
    "exterior-design",
    "finishing",
    "interior-design",
    "modern-bathrooms",
    "project-management",
    "smart-lighting",
    "supply"
)

Write-Host "Starting to update all services..." -ForegroundColor Green

foreach ($service in $services) {
    Write-Host "`nUpdating $service..." -ForegroundColor Cyan
    
    $basePath = "app/services/$service"
    
    # Update ServiceDetailHero.tsx
    $heroFile = "$basePath/ServiceDetailHero.tsx"
    if (Test-Path $heroFile) {
        $content = Get-Content $heroFile -Raw
        
        # Fix background gradient
        $content = $content -replace 'from-slate-900/95 via-gray-900/90 to-zinc-800/85', 'from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90'
        $content = $content -replace 'from-gray-900/95 via-slate-900/90 to-zinc-800/85', 'from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90'
        $content = $content -replace 'from-zinc-900/95 via-gray-900/90 to-slate-800/85', 'from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90'
        
        # Add floating elements if not present
        if ($content -notmatch 'Floating Elements') {
            $content = $content -replace '(<div className="relative z-10)', @"
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#CBC1B8]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#F7F6F4]/10 rounded-full blur-2xl animate-pulse"></div>

      `$1
"@
        }
        
        # Fix text colors
        $content = $content -replace 'text-white px-6', 'px-6'
        $content = $content -replace 'leading-tight">', 'leading-tight text-[#F7F6F4]">'
        $content = $content -replace 'text-white/90">', 'text-[#F7F6F4]/90">'
        
        # Add bg-gradient if section doesn't have it
        $content = $content -replace '<section className="relative min-h-\[70vh\] flex items-center justify-center overflow-hidden">', '<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90">'
        
        Set-Content $heroFile -Value $content
        Write-Host "  ✓ Updated ServiceDetailHero.tsx" -ForegroundColor Green
    }
    
    # Update ServiceFeatures.tsx
    $featuresFile = "$basePath/ServiceFeatures.tsx"
    if (Test-Path $featuresFile) {
        $content = Get-Content $featuresFile -Raw
        
        # Fix section background
        $content = $content -replace 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20', 'bg-gradient-to-b from-[#1C474A] to-[#0A1F21]'
        $content = $content -replace 'bg-gray-50', 'bg-gradient-to-b from-[#1C474A] to-[#0A1F21]'
        
        # Fix heading colors
        $content = $content -replace 'text-\[#0A1F21\] mb-6', 'text-[#F7F6F4] mb-6'
        $content = $content -replace 'text-white/80 max-w', 'text-[#CBC1B8]/90 max-w'
        
        # Fix card backgrounds
        $content = $content -replace 'bg-gradient-to-br from-\[#0A1F21\] to-\[#0F3A3E\]', 'bg-white/10 backdrop-blur-sm border border-white/20'
        $content = $content -replace 'hover:shadow-2xl', 'hover:shadow-2xl hover:bg-white/15'
        
        # Fix icon backgrounds
        $content = $content -replace 'bg-gradient-to-br from-\[#F7F6F4\] to-\[#CBC1B8\].*?text-white', 'bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">\n                <i className={`${feature.icon} text-3xl text-[#0A1F21]'
        $content = $content -replace 'group-hover:rotate-12', 'group-hover:scale-110'
        
        # Fix text colors in cards
        $content = $content -replace 'text-\[#0A1F21\] mb-4', 'text-[#F7F6F4] mb-4'
        $content = $content -replace 'text-white/80 leading', 'text-[#CBC1B8]/85 leading'
        
        Set-Content $featuresFile -Value $content
        Write-Host "  ✓ Updated ServiceFeatures.tsx" -ForegroundColor Green
    }
    
    # Update ServiceProcess.tsx
    $processFile = "$basePath/ServiceProcess.tsx"
    if (Test-Path $processFile) {
        $content = Get-Content $processFile -Raw
        
        # Fix section background
        $content = $content -replace 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20', 'bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E]'
        $content = $content -replace 'bg-gray-50', 'bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E]'
        
        # Fix heading colors
        $content = $content -replace 'text-\[#0A1F21\] mb-6', 'text-[#F7F6F4] mb-6'
        $content = $content -replace 'text-white/80 max-w', 'text-[#CBC1B8]/90 max-w'
        
        # Fix card backgrounds
        $content = $content -replace 'bg-gradient-to-br from-\[#0A1F21\] to-\[#0F3A3E\] p-8', 'bg-white/10 backdrop-blur-sm border border-white/20 p-8'
        $content = $content -replace 'hover:shadow-2xl transition', 'hover:shadow-2xl hover:bg-white/15 transition'
        
        # Fix number badge
        $content = $content -replace 'bg-gradient-to-br from-\[#F7F6F4\] to-\[#CBC1B8\].*?text-white font', 'bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center text-[#0A1F21] font'
        $content = $content -replace 'bg-gradient-to-br from-\[#0F3A3E\] to-\[#0A2F33\].*?text-white font', 'bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center text-[#0A1F21] font'
        
        # Fix icon backgrounds
        $content = $content -replace 'bg-gradient-to-br from-slate-100 to-gray-100.*?text-slate-600', 'bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">\n                  <i className={`${step.icon} text-3xl text-[#0A1F21]'
        
        # Fix text colors
        $content = $content -replace 'text-\[#0A1F21\] mb-4', 'text-[#F7F6F4] mb-4'
        $content = $content -replace 'text-white/80 leading', 'text-[#CBC1B8]/85 leading'
        
        Set-Content $processFile -Value $content
        Write-Host "  ✓ Updated ServiceProcess.tsx" -ForegroundColor Green
    }
    
    # Update ServicePackages.tsx
    $packagesFile = "$basePath/ServicePackages.tsx"
    if (Test-Path $packagesFile) {
        $content = Get-Content $packagesFile -Raw
        
        # Fix section background
        $content = $content -replace 'bg-gradient-to-b from-\[#0A1F21\] to-\[#0F3A3E\]', 'bg-gradient-to-br from-[#1C474A] to-[#0A2F33]'
        $content = $content -replace 'bg-gray-50', 'bg-gradient-to-br from-[#1C474A] to-[#0A2F33]'
        
        # Fix heading colors
        $content = $content -replace 'text-\[#0A1F21\] mb-6', 'text-[#F7F6F4] mb-6'
        $content = $content -replace 'text-white/80 max-w', 'text-[#CBC1B8]/90 max-w'
        
        # Fix card backgrounds - replace white with transparent
        $content = $content -replace 'bg-white rounded-3xl', 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl'
        $content = $content -replace 'hover:shadow-2xl transition', 'hover:shadow-2xl hover:bg-white/15 transition'
        
        # Fix popular badge
        $content = $content -replace 'bg-gradient-to-r from-\[#F7F6F4\] to-\[#CBC1B8\] text-white', 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21]'
        $content = $content -replace 'bg-gradient-to-r from-\[#0F3A3E\] to-\[#0A2F33\] text-white', 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21]'
        
        # Fix package title and description colors
        $content = $content -replace 'text-\[#0A1F21\] mb-2', 'text-[#F7F6F4] mb-2'
        $content = $content -replace 'text-white/80 mb-6', 'text-[#CBC1B8]/85 mb-6'
        
        # Fix price colors
        $content = $content -replace 'text-\[#0A1F21\]">\{pkg\.price\}', 'text-[#F7F6F4]">{pkg.price}'
        $content = $content -replace 'text-white/80 mr-2', 'text-[#CBC1B8]/85 mr-2'
        
        # Fix checkmark colors
        $content = $content -replace 'text-green-500', 'text-[#CBC1B8]'
        $content = $content -replace '<span className="text-white/80">', '<span className="text-[#F7F6F4]/90">'
        
        # Fix button
        $content = $content -replace 'bg-gradient-to-r \$\{pkg\.color\} text-white', 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21]'
        $content = $content -replace 'hover:-translate-y-2', 'hover:scale-105'
        
        Set-Content $packagesFile -Value $content
        Write-Host "  ✓ Updated ServicePackages.tsx" -ForegroundColor Green
    }
    
    # Update ServiceGallery.tsx
    $galleryFile = "$basePath/ServiceGallery.tsx"
    if (Test-Path $galleryFile) {
        $content = Get-Content $galleryFile -Raw
        
        # Fix section background
        $content = $content -replace 'bg-gradient-to-b from-\[#0A1F21\] to-\[#0F3A3E\]', 'bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]'
        $content = $content -replace 'bg-gray-50', 'bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]'
        
        # Fix heading colors
        $content = $content -replace 'text-\[#0A1F21\] mb-6', 'text-[#F7F6F4] mb-6'
        $content = $content -replace 'text-white/80 max-w', 'text-[#CBC1B8]/90 max-w'
        
        # Fix card backgrounds
        $content = $content -replace 'className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"', 'className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20"'
        
        # Fix overlay gradient
        $content = $content -replace 'from-black/80 via-black/40', 'from-[#0A1F21]/95 via-[#0A1F21]/60'
        
        # Fix text colors in overlay
        $content = $content -replace 'text-white transform', 'transform'
        $content = $content -replace '<h3 className="text-2xl font-\[''Cairo''\] font-bold">', '<h3 className="text-2xl font-[''Cairo''] font-bold text-[#F7F6F4]">'
        
        Set-Content $galleryFile -Value $content
        Write-Host "  ✓ Updated ServiceGallery.tsx" -ForegroundColor Green
    }
}

Write-Host "`n✅ All services have been updated successfully!" -ForegroundColor Green
Write-Host "The new color scheme has been applied to all 9 remaining services." -ForegroundColor Cyan
