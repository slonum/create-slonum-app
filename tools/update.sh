#!/bin/bash
 
project_root="$PWD"
ui_folder="src/lib/shared/lib/ui-kit"
slonum_folder="src/lib/shared/lib/slonum-kit"
branch='main'

if [[ ! -z "$3" ]]; then branch="$3"; fi
if [[ ! -z "$2" && "$2" != 'ssh' ]]; then branch="$2"; fi

if [[ -d "$ui_folder" ]]; then rm -rf "$ui_folder"; fi
if [[ -d "$slonum_folder" ]]; then rm -rf "$slonum_folder"; fi

if [[ $1 == "ssh" ]]; then
  git clone -n -b "$branch" --depth=1 --filter=tree:0 \
  git@gitlab.com:slonum/frontend-ui.git "$ui_folder"
else
  git clone -n -b "$branch" --depth=1 --filter=tree:0 \
  https://gitlab.com/slonum/frontend-ui.git "$ui_folder"
fi

cd "$ui_folder"

git sparse-checkout set --no-cone src/lib/shared/
git checkout

cd "$project_root"

cp -r "$ui_folder/src/lib/shared/ui-kit" "src/lib/shared/lib"
cp -r "$ui_folder/src/lib/shared/slonum-kit" "src/lib/shared/lib"
cp -r "$ui_folder/src/lib/shared/styles/common" "src/lib/shared/styles/"

if [[ ! -f  "$ui_folder/src/lib/shared/styles/app.scss" ]]; then
  cp "$ui_folder/src/lib/shared/styles/app.scss" "src/lib/shared/styles/"
fi

if [[ ! -f  "$ui_folder/src/lib/shared/styles/_base.scss" ]]; then
  cp "$ui_folder/src/lib/shared/styles/app.scss" "src/lib/shared/styles/"
fi

if [[ -d "src/lib/shared/lib/ui-kit/src" ]]; then rm -rf "src/lib/shared/lib/ui-kit/src"; fi

git checkout